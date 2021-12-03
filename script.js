
const app = new Vue({
    el: '#root',
    data: {
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
                    message: 'Ricordati di dargli da mangiare',
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
                    status: 'received'
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
                name: 'Luisa',
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
        ],

        inputMessage: '',
        activeBox: 0,
        inputIncludes: '',
    },

    methods: {

        // selezionare un contatto tramite la mia variabile 'activeBox'.
        selected: function(i) {
            this.activeBox = i;
        },

        // inviare un messaggio al contatto selezionato tramite 'activeBox', inserire quindi nell'array il messaggio in input 'activeMessage'.
        send: function() {
            let date = dayjs().format('DD/MM/YYYY HH:mm:ss');
            // this.contacts[i].messages.push(
            this.contacts[this.activeBox].messages.push(
                {
                    date : date,
                    message : this.inputMessage,
                    status : 'sent',
                },
            ),
            this.inputMessage = '';
        // ricevere un messaggio di risposta dopo un minuto e mezzo.
            setTimeout(this.received, 1500);
        },

        // inserire nell'array il messaggio di riposta al messaggio in input dell'utente.
        received: function() {
            let date = dayjs().format('DD/MM/YYYY HH:mm:ss');
            this.contacts[this.activeBox].messages.push(
                {
                    date : date,
                    message : 'ok',
                    status : 'received',
                });
        },

        // prende un input (inputIncludes) dall'utente e cerca una corrispondenza nell'array, facendo attenzione alla sensibilità alle lettere maiuscole e minuscole.
        find: function(i) {
            inputIncludes = this.inputIncludes.toLowerCase();
            names = this.contacts[i].name.toLowerCase();
            if(names.includes(inputIncludes)){
                return true
            }else{
                return false
            }

        },
    },
});