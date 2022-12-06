export const generateUrl = title => {
    const titleKeyWord = title.replace(/[^a-zA-Z ]/g, " ").split("|")[0];
    return titleKeyWord.replace(/  +/g, " ").trim().split(" ").join("-").toLowerCase();
};