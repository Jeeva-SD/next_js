import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { AiOutlineDownload, AiFillCrown } from 'react-icons/ai';
import Divider from '../common/Divider';
import TitleText from '../common/TitleText';
import { generateUrl } from '../../helper/generateUrl';
import style from '../../../styles/home_page.module.scss';

const Build = ({ videos, router, keywords }) => {

    const adSenseCode = `
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6663847551285629"
    crossorigin="anonymous"></script>
    <!-- Jee6 Display Ads Square -->
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-6663847551285629"
        data-ad-slot="2054475167"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>`;

    return (
        <Container className={`mt-5 ${style.home_card_container}`}>
            <Row className='justify-content-center'>
                <Col className='col-10 text-center'>
                    <div dangerouslySetInnerHTML={{ __html: adSenseCode }}></div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                {videos?.slice(0, 15).map((video, index) => {
                    // const imageLink = video.thumbnail;
                    const tags = keywords && keywords?.length > 0 ? keywords.filter((_e, index) => index < 4) : video?.tags.filter((_e, index) => index < 4);

                    return (
                        <Col lg={4} md={6} sm={11} xs={11}
                            className={`${style.video_card}`}
                            key={index}
                        >
                            {index === 4 &&
                                <div dangerouslySetInnerHTML={{ __html: adSenseCode }}></div>}

                            {index === 10 &&
                                <div dangerouslySetInnerHTML={{ __html: adSenseCode }}></div>}

                            {index !== 4 && index !== 10 &&
                                <Card className={`${style.card} cardImg shadow-sm text-center p-3 my-3 `}>
                                    {/* <Image
                                    width={350}
                                    height={200}
                                    className='img-fluid'
                                    src={imageLink}
                                    alt={video.title}
                                    draggable="false"
                                /> */}

                                    <TitleText title={video.title} />

                                    <Card.Body>
                                        <Card.Title className={`${style.card_title}`}>
                                            {video.title}
                                        </Card.Title>

                                        <Card.Text className={`${style.card_text}`}>
                                            {tags.map((e, i) =>
                                                <span
                                                    key={i}
                                                    className='text-muted'
                                                >
                                                    {i > 0 && <span className='mx-2'>•</span>}
                                                    {e}
                                                </span>
                                            )}
                                        </Card.Text>

                                        <Divider />

                                        <Row className={`${style.card_footer} text-muted justify-content-center`}>
                                            <Col className={`${style.channel_title} col-4 p-0`}>
                                                <AiFillCrown color='orange' />
                                                <span className={style.footer_span}>{video.channelTitle}</span>
                                            </Col>
                                            <Col className={`${style.card_col} col-1 px-1`}>
                                                <Divider type={1} />
                                            </Col>
                                            <Col className={`${style.card_col} col-4 p-0`} onClick={() => router.push(`${generateUrl(video.title)}`)}>
                                                <AiOutlineDownload />
                                                <span className={style.footer_span}><b className={style.bold_download}>Download</b></span>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>}
                        </Col>);
                })}
            </Row>
        </Container>
    );
};

export default Build;