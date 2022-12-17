const ytdl = require('ytdl-core');
const { spawn } = require('child_process');
const ffmpegPath = require('ffmpeg-static');
const sanitize = require('sanitize-filename');
const { chain, forEach } = require('lodash');

export default async function handler(req, res) {
    try {
        const { id, format, resolution } = req.query;
        const URL = `https://www.youtube.com/watch?v=${id}`;

        ytdl.getInfo(URL).then(({ videoDetails, formats }) => {
            const { title } = videoDetails;
            const streams = {};

            // if (format === 'video') {
            //     const resolutions = getResolutions(formats);
            //     if (!resolutions.includes(resolution)) next(new Error('Resolution is incorrect'));

            //     const videoFormat = chain(formats).filter(({ qualityLabel, container }) => qualityLabel === resolution && container === 'mp4').orderBy('fps', 'desc').head().value();

            //     streams.video = ytdl(URL, { quality: videoFormat.itag });
            //     streams.audio = ytdl(URL, { quality: 'highestaudio' });
            // }

            if (format === 'audio') streams.audio = ytdl(URL, { quality: 'highestaudio' });

            const exts = {
                video: 'mp4',
                audio: 'mp3'
            };

            const contentTypes = {
                video: 'video/mp4',
                audio: 'audio/mpeg'
            };

            const ext = exts[format];
            const contentType = contentTypes[format];
            const filename = `${encodeURI(sanitize(title))}.${ext}`;

            res.setHeader('Content-Type', contentType);
            res.setHeader('Content-Disposition', `attachment; filename=${filename}; filename*=utf-8''${filename}`);

            const pipes = {
                out: 1,
                err: 2,
                video: 3,
                audio: 4
            };

            const ffmpegInputOptions = {
                video: [
                    '-i', `pipe: ${pipes.video}`,
                    '-i', `pipe: ${pipes.audio}`,
                    '-map', '0:v',
                    '-map', '1:a',
                    '-c:v', 'copy',
                    '-c:a', 'libmp3lame',
                    '-crf', '27',
                    '-preset', 'veryfast',
                    '-movflags', 'frag_keyframe+empty_moov',
                    '-f', 'mp4'
                ],
                audio: [
                    '-i', `pipe: ${pipes.audio}`,
                    '-c:a', 'libmp3lame',
                    '-vn',
                    '-ar', '44100',
                    '-ac', '2',
                    '-b:a', '192k',
                    '-f', 'mp3'
                ]
            };

            const ffmpegOptions = [
                ...ffmpegInputOptions[format],
                '-loglevel', 'error',
                '-'
            ];

            const ffmpegProcess = spawn(
                ffmpegPath,
                ffmpegOptions,
                {
                    stdio: ['pipe', 'pipe', 'pipe', 'pipe', 'pipe'],
                },
            );

            const handleFFmpegStreamError = (err) => console.error("eee", err);

            forEach(streams, (stream, format) => {
                const dest = ffmpegProcess.stdio[pipes[format]];
                stream.pipe(dest).on('error', handleFFmpegStreamError);
            });

            ffmpegProcess.stdio[pipes.out].pipe(res);

            let ffmpegLogs = '';
            ffmpegProcess.stdio[pipes.err].on(
                'data',
                chunk => ffmpegLogs += chunk.toString(),
            );

            ffmpegProcess.on(
                'exit', (exitCode) => {
                    if (exitCode === 1) {
                        console.error(ffmpegLogs);
                    }
                    res.end();
                }
            );

            res.on(
                'close',
                () => ffmpegProcess.kill()
            );

        }).catch(err => next(err));

    } catch (err) {
        res.send({ message: 'Error!, Try Again Later' });
    }
}