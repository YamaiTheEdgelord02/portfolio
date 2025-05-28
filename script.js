const h3Op = document.getElementById("h3-op")
h3Op.addEventListener(
    "click", 
    startOp,
    {once: true}
)

function startOp() {
    const iframeOp = document.createElement("iframe")
    iframeOp.src = "https://openprocessing.org/sketch/2632083/embed/"
    iframeOp.width = "400"
    iframeOp.height = "400"
    h3Op.insertAdjacentElement("afterend", iframeOp)
}