AFRAME.registerComponent("cursor-events", {
    schema: {
        selectedItemId: {default: "", type: "string"},
    },

    init: function() {
        this.handle_mouse_enter_events()
        this.handle_mouse_leave_events()
    },

    handle_places_list_state: function() {
        const id = this.el.getAttribute("id")
        const places_id = ["smile", "sisters", "ghosts", "drama"]

        if(places_id.includes(id)){
            const placesContainer = document.querySelector("#comics-container")
            placesContainer.setAttribute("cursor-events", {
                selectedItemId: id,
            })
            this.el.setAttribute("material", {
                color: "#ff3355",
                opacity: 1,
            })
        }
    },

    handle_mouse_enter_events: function() {
        this.el.addEventListener("mouseenter", () => {
            this.handle_places_list_state()
        })
    },

    handle_mouse_leave_events: function() {
        this.el.addEventListener("mouseleave", () => {
            const {selectedItemId} = this.data
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")

                if(id == selectedItemId){
                    el.setAttribute("material", {color: "#0077CC", opacity: 1})
                }
            }
        })
    }
})