<script setup lang="ts">
import { ref } from "vue";
import Logo from "/images/logo.svg";

const openMenu = ref(false);
</script>

<template>
    <nav
        class="w-full flex py-8 gap-12 justify-between md:px-24 bg-white px-8 relative"
    >
        <img :src="Logo" />
        <div class="flex-grow md:flex h-full hidden">
            <div
                class="flex-grow flex gap-8 text-sm text-neutral-500 items-center"
            >
                <button>Features</button>
                <button>Pricing</button>
                <button>Resources</button>
            </div>
            <div class="h-full flex gap-4 text-sm items-center">
                <button class="text-neutral-500">Login</button>
                <button class="rounded-full px-4 py-2 bg-sky-400 text-white">
                    Sign Up
                </button>
            </div>
        </div>
        <button class="block md:hidden" @click="() => (openMenu = !openMenu)">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6 text-neutral-600"
                viewBox="0 0 448 512"
            >
                <!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                <path
                    d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z"
                />
            </svg>
        </button>
    </nav>
    <div
        class="md:hidden absolute bg-violet-950 mx-8 z-30 w-[calc(100%-4rem)] left-0 top-[6rem] rounded-2xl p-8 flex flex-col gap-12 text-white font-bold tracking-wider text-2xl"
        v-bind:class="openMenu ? 'block' : 'hidden'"
    >
        <button>Features</button>
        <button>Pricing</button>
        <button>Resources</button>
        <p
            class="w-full text-transparent border-t-[1px] border-neutral-500"
        ></p>
        <button>Login</button>
        <button class="rounded-full px-4 py-4 bg-sky-400 text-white">
            Sign Up
        </button>
    </div>
</template>
