const { request } = require("http")

require("dotenv").config()

const TelegramBot = require("node-telegram-bot-api")
const { text } = require("stream/consumers")

const bot = new TelegramBot(process.env.TELEGRAM_API_KEY, {
    polling: true
})

bot.onText(/start/, msg => {
    // console.log(msg);
    bot.sendMessage(msg.chat.id, `salom ${msg.chat.first_name}`,{
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: "menu"
                    },
                    {
                        text: "video"
                    }
                ],
                [
                    {
                        text: "audio",
                    },
                    {
                        text: "document"
                    }
                ],
                [
                    {
                        text: "Contact"
                    }
                ]
            ],
            resize_keyboard: true
        })
    })
})

bot.on("message", msg => {
    const chatId = msg.chat.id
    console.log(msg.text);
    if(msg.text == 'menu'){
        bot.sendMessage(chatId, "Tanlang", {


            reply_markup: JSON.stringify({
                keyboard: [
                [
                    {
                        text: "Ovqatlar"
                    },
                    {
                        text:"Ichimliklar"
                    }
                ]
            ],
            resize_keyboard: true
        })           

        })
    }else if(msg.text == 'Ovqatlar'){
        bot.sendMessage(chatId, "Ovqatni tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                            [
                                {
                                    text: "Osh"
                                },
                                {
                                    text:"lag'mon"
                                },
                                {
                                    text: "mastava"
                                }
                            ],
                            [
                                {
                                    text: "Manti"
                                },
                                {
                                    text:"Shurva"
                                },
                                {
                                    text: "besh barmoq"
                                }
                            ]
                        ],
                        resize_keyboard: true
            })
        })
    }else if(msg.text == 'Ichimliklar'){
        bot.sendMessage(chatId, "Ichimlikni tanlang", {
            reply_markup: JSON.stringify({
                keyboard: [
                            [
                                {
                                    text: "Fanta"
                                },
                                {
                                    text:"Cola"
                                },
                                {
                                    text: "Pepsi"
                                }
                            ],
                            [
                                {
                                    text: "Choy"
                                },
                                {
                                    text:"Gaz Suv"
                                },
                                {
                                    text: "Begaz Suv"
                                }
                            ]
                        ],
                        resize_keyboard: true
            })
        })
    }
})
