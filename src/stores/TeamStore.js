import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {

    state: () => ({
            name: '',
            spots: 0, 
            members: []
    }),

    actions: {
        async fill() {
            await import('@/team.json').then(r => {

                let data = r.default;
                console.log(data)

                this.name = data.name;
                this.spots = data.spots;
                this.members = data.members;
            })
        }, 
    }

});