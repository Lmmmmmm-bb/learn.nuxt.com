import { defineStore } from 'pinia'
import type { File } from '../structures/File'

export type PlaygroundStatus = 'init' | 'mount' | 'install' | 'start' | 'ready' | 'error'

export type PlaygroundState = ReturnType<typeof usePlaygroundStore>

export const usePlaygroundStore = defineStore('playground', () => {
  const status = ref<PlaygroundStatus>('init')
  const error = shallowRef<{ message: string }>()
  const stream = ref<ReadableStream | undefined>()

  const previewLocation = ref({
    origin: '',
    fullPath: '',
  })
  const previewUrl = computed(() => previewLocation.value.origin + previewLocation.value.fullPath)

  return {
    files: shallowRef<File[]>([]),
    status,
    error,
    stream,
    previewUrl,
    previewLocation,
  }
})
