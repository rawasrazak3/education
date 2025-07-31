<template>
  <div>
    mkkk
  </div>
</template>

<script setup>
    import { studentStore } from '@/stores/student'
    import { createResource, FeatherIcon } from 'frappe-ui'
    import { inject, ref, onMounted, onBeforeUnmount } from "vue"
    const { getCurrentProgram, getStudentInfo } = studentStore()
    const socket = inject("$socket")
    const studentBus = createResource({
        url: 'frappe.client.get_list',
        params: {
          doctype: 'Bus Location Log',
          fields: ['*'],
        },
        auto: true,
        cacheKey: "UnreadItems",
        onSuccess(info) {
            console.log(info,"###################################");
        },
        onError(err) {
            console.error(err)
        },
    })
    onMounted(() => {
      console.log("777777777777")
      socket.on('refetch_resource', (data) => {
        console.log("Socket event data:", data)
      })
    })
</script>