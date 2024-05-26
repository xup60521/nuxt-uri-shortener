<script setup lang="ts">
import Logo from "/images/logo.svg";
import fb from "/images/icon-facebook.svg";
import twitter from "/images/icon-twitter.svg";
import pinterest from "/images/icon-pinterest.svg";
import ig from "/images/icon-instagram.svg";
</script>
<template>
    <footer
        class="bg-black text-white flex md:flex-row flex-col gap-8 justify-around py-16 px-16 items-center md:items-start"
    >
        <div class="h-full flex justify-center">
            <img
                :src="Logo"
                style="filter: brightness(0) invert(1)"
                class="w-fit h-fit"
            />
        </div>
        <div class="flex md:scale-100 scale-105 md:flex-row flex-col md:gap-24 gap-10 items-center md:items-start">
            <div class="flex flex-col gap-4 text-neutral-400 text-sm">
                <p class="font-bold text-white py-2 md:text-left text-center">Features</p>
                <button class="md:text-left">Link Shortening</button>
                <button class="md:text-left">Branded Links</button>
                <button class="md:text-left">Analytics</button>
            </div>
            <div class="flex flex-col gap-4 text-neutral-400 text-sm">
                <p class="font-bold text-white py-2 md:text-left text-center">Resources</p>
                <button class="md:text-left">Blog</button>
                <button class="md:text-left">Developers</button>
                <button class="md:text-left">Support</button>
            </div>
            <div class="flex flex-col gap-4 text-neutral-400 text-sm">
                <p class="font-bold text-white py-2 md:text-left text-center">Company</p>
                <button class="md:text-left">About</button>
                <button class="md:text-left">Our Team</button>
                <button class="md:text-left">Careers</button>
                <button class="md:text-left">Contact</button>
            </div>
        </div>
        <div class="flex gap-4 items-start py-2">
            <button><img :src="fb" class="size-5" /></button>
            <button><img :src="twitter" class="size-5" /></button>
            <button><img :src="pinterest" class="size-5" /></button>
            <button><img :src="ig" class="size-5" /></button>
        </div>
    </footer>
</template>
