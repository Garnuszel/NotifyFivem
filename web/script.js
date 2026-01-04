const ICONS = {
    info: "fa-sharp fa-solid fa-circle-info",
    success: "fa-sharp fa-solid fa-circle-check",
    error: "fa-sharp fa-solid fa-circle-xmark",
    warning: "fa-sharp fa-solid fa-triangle-exclamation",
};

window.addEventListener("message", function(event) {
    const data = event.data;

    switch (data.action) {
        case "addNotify":
            addNotify(data.type, data.title, data.desc, data.lenght);
        break;
    }
});

const addNotify = (type, title, desc, length) => {
    const iconClass = ICONS[type];

    const notify = $(`
        <div class="notify ${type}">
            <div class="icon">
                <i class="${iconClass}"></i>
            </div>
            <div class="text">
                <div class="title"><span></span></div>
                <div class="desc"><span></span></div>
            </div>
        </div>
    `);

    notify.find(".title span").text(title);
    notify.find(".desc span").text(desc);

    $(".notify-container").append(notify);

    setTimeout(() => {
        notify.addClass("hide");

        setTimeout(() => {
            notify.remove();
        }, 220);
    }, Number(length));
};



// addNotify("info", "Info", "TEST", 4000);
// addNotify("success", "Success", "TEST", 8000);
// addNotify("warning", "Warn", "TEST", 12000);
// addNotify("error", "Error", "TEST", 16000);
