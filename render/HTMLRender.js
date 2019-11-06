import RenderInterface from './RenderInterface.js'

export default  class HTMLRender extends RenderInterface {
    init() {
        this.objects.forEach(obj => {
            let box = document.createElement('div')
            let st = box.style
            st.backgroundColor = 'red'
            this.container.element.appendChild(box)
            obj.HTMLRender = box
        });

    }

    render() {
        this.objects.forEach(obj => {
            let box = obj.HTMLRender
            let st = box.style
            st.left = `${obj.x}px`
            st.top = `${obj.y}px`
            st.width = `${obj.width}px`
            st.height = `${obj.height}px`
            st.backgroundColor = obj.color
        });   
    }

    dispose() {
        this.objects.forEach(obj => {
            delete obj.HTMLRender
        }); 
        this.container.element.innerHTML = ''
        // clear html elements
    }
}