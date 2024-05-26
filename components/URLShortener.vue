<script setup>
import { onMounted, ref } from 'vue'
import ShortenBackground from '/images/bg-shorten-desktop.svg'
import ShortenBackgroundMobile from '/images/bg-shorten-mobile.svg'
import { z } from 'zod'

const input = ref('')
const history = ref([])
const allowClick = ref(true)
const isCopiedIndex = ref(-1)

async function shortenURL() {
  if (!allowClick.value) {
    return
  }
  allowClick.value = false
  "https://cleanuri.com/api/v1/shorten"
  fetch('/api/short', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    body: new URLSearchParams({
      url: input.value
    }).toString()
  })
    .then((res) => res.json())
    .then((res) => {
        const resSchema = z.object({
            result_url: z.string()
        })
        const data = resSchema.safeParse(res)
        if (data.success) {
            history.value.push({
              original: input.value,
              shortened: data.data.result_url
            })
        }
      
      allowClick.value = true
    })
}

/**
 * @param {number} itemIndex
 * @param {string} itemUrl
 */

async function writeToClipboard(itemIndex, itemUrl) {
  const type = 'text/plain'
  const blob = new Blob([itemUrl], { type })
  const data = [new ClipboardItem({ [type]: blob })]
  await navigator.clipboard.write(data)
  isCopiedIndex.value = itemIndex
}

onMounted(() => {
  const data = JSON.parse(localStorage.getItem('short-uri'))
  const dataSchema = z
    .object({
      original: z.string(),
      shortened: z.string()
    })
    .array()
  const parsed = dataSchema.safeParse(data)
  if (parsed.success) {
    history.value = parsed.data
  }
})

watch(()=>history.value.length, (newValue) => {
    localStorage.setItem('short-uri', JSON.stringify([...history.value]))
})

</script>
<template>
    <div class="w-full flex flex-col gap-4 md:px-24 px-8 -translate-y-14">
        <div
            class="w-full md:flex hidden p-12 bg-purple-900 rounded-md flex-shrink-0"
            v-bind:style="{
                backgroundImage: `url(${ShortenBackground})`,
                backgroundSize: 'cover',
            }"
        >
            <form class="w-full flex gap-4" v-on:submit.prevent="shortenURL">
                <input
                    v-model="input"
                    class="flex-grow p-4 px-6 rounded-md"
                    placeholder="Shorten a link here..."
                    id="input"
                    required
                />
                <button
                    class="rounded-md px-6 py-4 bg-sky-400 text-white"
                    v-bind:class="!allowClick && 'disable'"
                >
                    Shorten it!
                </button>
            </form>
        </div>
        <div
            class="w-full md:hidden p-8 bg-purple-900 flex rounded-md flex-shrink-0"
            v-bind:style="{
                backgroundImage: `url(${ShortenBackgroundMobile})`,
                backgroundSize: 'length',
            }"
        >
            <form
                class="w-full flex flex-col gap-4"
                v-on:submit.prevent="shortenURL"
            >
                <input
                    v-model="input"
                    class="flex-grow p-4 px-6 rounded-md"
                    placeholder="Shorten a link here..."
                    id="input"
                    required
                />
                <button
                    class="rounded-md px-6 py-4 bg-sky-400 text-white"
                    v-bind:class="!allowClick && 'disable'"
                >
                    Shorten it!
                </button>
            </form>
        </div>
        <div
            v-for="(item, index) in history"
            class="flex md:flex-row flex-col justify-between bg-white py-8 rounded-md items-center gap-2 md:gap-0"
            v-bind:key="index"
        >
            <p
                class="font-bold text-lg truncate text-left md:w-fit px-8 w-full"
            >
                {{ item.original }}
            </p>
            <div
                class="md:hidden border-t-[1.5px] border-neutral-100 w-[100vw]"
            ></div>
            <div
                class="flex gap-4 items-center md:w-fit w-full px-8 md:flex-row flex-col"
            >
                <p
                    class="font-bold text-lg text-sky-400 truncate text-left md:w-fit w-full"
                >
                    {{ item.shortened }}
                </p>
                <button
                    v-on:click="() => writeToClipboard(index, item.shortened)"
                    class="py-3 px-6 rounded-md text-white font-bold md:w-24 w-full"
                    v-bind:class="
                        isCopiedIndex === index
                            ? 'bg-neutral-600'
                            : 'bg-sky-400'
                    "
                >
                    {{ isCopiedIndex === index ? "copied" : "copy" }}
                </button>
            </div>
        </div>
    </div>
</template>
