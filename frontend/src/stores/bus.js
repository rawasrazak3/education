import { defineStore } from 'pinia'
import { ref } from 'vue'
import { createResource } from 'frappe-ui'
import { studentStore } from '@/stores/student'

export const bus = defineStore('education-bus', () => {
    const { student } = studentStore()
    console.log(student,"jjjjjjjjjjjjjj");
    
    const studentBus = createResource({
        url: 'education.education.doctype.student_bus_assignment.student_bus_assignment.get_current_bus_assignment',
        makeParams(){
            return{
                student_id:student.name
            }
        },
        auto:true,
        onSuccess(info) {
            console.log("###################################");
            
        },
        onError(err) {
            console.error(err)
        },
    })
    studentBus.fetch()
    console.log(student.data,"@@@@@@@@@@@@@@@@@@@@@");
    
    return {

    }

})