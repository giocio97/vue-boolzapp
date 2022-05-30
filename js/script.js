const whatsjs = new Vue({
    el: "#appjs",
    data: {
        activeChat: 0,
        newMex:"",
        contacts: [
            {
                name: 'Michele',
                avatar:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Pink&eyeType=Hearts&eyebrowType=UpDown&mouthType=Tongue&skinColor=Pale',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Blue&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Blue01&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Disbelief&skinColor=Brown',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription02&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtScoopNeck&clotheColor=Pink&eyeType=Squint&eyebrowType=Default&mouthType=Sad&skinColor=DarkBrown',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=BlazerShirt&clotheColor=PastelYellow&eyeType=EyeRoll&eyebrowType=UpDownNatural&mouthType=Serious&skinColor=Light',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Deer&eyeType=Hearts&eyebrowType=UnibrowNatural&mouthType=Default&skinColor=Light',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Selena&eyeType=WinkWacky&eyebrowType=Angry&mouthType=Concerned&skinColor=Pale',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&accessoriesType=Kurt&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=ShirtScoopNeck&clotheColor=Blue02&eyeType=Default&eyebrowType=UpDown&mouthType=Smile&skinColor=Light',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
    },

    methods:{
        selectChat(activeChat){
            this.activeChat = activeChat;
        },

        inviatoORicevuto(status){
            if(status == "received"){
                return "ricevuto"
            } else{
                return "inviato"
            }
        },
        addMex(){
            const nuovoMessaggio = {
                         message:this.newMex,
                        status: 'sent',
            }

            const nuovoMessaggioRisp = {
                message:"ok",
               status: `received`,
   }

            if(this.newMex!==""){
               
                this.contacts[activeChat].messages.push(nuovoMessaggio);
                this.newMex = "";
                setInterval( this.contacts[activeChat].messages.push(nuovoMessaggioRisp), 1000)
            }
        }

    }
        
        
        
    
    });