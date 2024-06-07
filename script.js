$(document).ready(function () {
    $("#name").text("ChatGPT");

    $("#msend").on("click", function () {
        var message = $("#val").val();
        if (message.trim()) {
            appendMessage(message, "sent");
            $("#val").val("");
            setTimeout(function () {
                autoReply();
            }, 1000);
        }
    });

    function appendMessage(text, type) {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var time = hours + ":" + (minutes < 10 ? '0' : '') + minutes;
        
        var messageHTML = '<div class="message ' + type + '">' +
            text +
            '<div class="metadata">' +
            '<span class="time">' + time + '</span>' +
            '<span class="tick"><svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 0C5.371 0 0 5.371 0 12c0 6.63 5.371 12 12 12s12-5.371 12-12c0-6.63-5.371-12-12-12zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-5l-5-5 1.41-1.42L11 14.17l7.59-7.59L20 8l-9 9z"/></svg></span>' +
            '</div>' +
            '</div>';

        $(".conversation-container").append(messageHTML);
        $(".conversation-container").scrollTop($(".conversation-container")[0].scrollHeight);
    }

    function autoReply() {
        var autoReplies = [
            "Hello! How can I help you today?",
            "I'm here to assist you.",
            "Feel free to ask me anything."
        ];
        var reply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
        appendMessage(reply, "received");
    }
});
