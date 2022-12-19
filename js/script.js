const { createApp } = Vue;

createApp({
    data(){
        return{
            isActiveToggle  : false,
            userSearchChat : '',
            userMessage : '',
            botMessage: '',
            activeChatIndex : 0,
            dateTime : '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
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
                    avatar: '_2',
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
                    avatar: '_3',
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
                    avatar: '_4',
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
                    avatar: '_5',
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
                    avatar: '_6',
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
                    avatar: '_7',
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
                    avatar: '_8',
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
            
    }
    },

    methods:{
        //Get the actual date and time
        dateNow(){
            let today = new Date();
            let date = today.getDate() + '/'+ (today.getMonth() + 1) + '/' + today.getFullYear();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            return this.dateTime = date +' '+ time;
        },
        //Give back the index of the selected chat 
        currentChat(index){
            this.activeChatIndex = index;
        },
        //Add a new message like an obj in my array as the same position of other messages 
        newMessage(){
            if(this.userMessage.length >= 1){
                this.userMessage = {message : this.userMessage, status : 'sent', date : this.dateNow()};
                this.contacts[this.activeChatIndex].messages.push(this.userMessage);
                this.userMessage = '';
                setTimeout(this.autoMessage, 1000);
            }

        },
        //Delete the selected message and check if how many messages are in chat. If the chat is empty so delete the whole chat. 
        deleteMessage(index){
            if(this.contacts[this.activeChatIndex].messages.length <= 1){
                this.contacts.splice(this.activeChatIndex, 1);
            }else{
                this.contacts[this.activeChatIndex].messages.splice(index, 1).message
            }
        },
        //Create a new automated message. ***notice the message is only created here but he his recalled in the "newMessage" function with a timing function
        autoMessage(){
            this.botMessage = {message : 'Va bene!', status : 'received', date : this.dateNow()};
            this.contacts[this.activeChatIndex].messages.push(this.botMessage);

        },
        //Check what the user writes in the search bar, is in my array name. If it's present I will show the correct search and remove incompatible search.
        findContact(){
            this.contacts.forEach(element => {
                this.userSearchChat = this.userSearchChat
                if(element.name.toLowerCase().includes(this.userSearchChat.toLowerCase())){
                    element.visible = true
                }else{
                    element.visible = false
                }               
            });
        },
        //Toggle messages information, when user click on info button the date information will displayed for 5seconds
        isActive(){
           this.isActiveToggle = !this.isActiveToggle
           if(this.isActiveToggle == true){
            setTimeout(this.isActive, 5000);
           }
           
        }

        
    

    },

}).mount('#app')



	
