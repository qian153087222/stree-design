import { defineComponent } from "vue";

export default defineComponent({
    name: 'SButton',
    props: {
        
    },
    setup(props) {

    },
    render() {
       return (
           <>
           <button class="px-3 py-2 border text-sm border-gray-200 rounded cursor-pointer  focus:outline-none hover:text-green-200 hover:border-green-200 transition duration-500 ease-in-out flex justify-center items-center">
            <span>Default</span>
           </button>
           <button class="px-2 py-2 border text-sm border-gray-200 bg-green-600 text-white rounded cursor-pointer focus:outline-none  hover:bg-green-500 transition duration-500 ease-in-out flex justify-center items-center">
           <span>Primary</span>
          </button>
           <button class="px-2 py-2 border active:bg-info-pressed text-px border-gray-200 bg-info-default text-white rounded cursor-pointer focus:outline-none  hover:bg-info-hover transition duration-500 ease-in-out flex justify-center items-center">
           <span>Info</span>
          </button>
           </>
       )
    }

})
