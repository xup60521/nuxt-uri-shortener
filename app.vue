<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import FooterComponent from "./components/FooterComponent.vue"
import URLShortener from "./components/URLShortener.vue";
import Working from "/images/illustration-working.svg";
import recognition from "/images/icon-brand-recognition.svg";
import records from "/images/icon-detailed-records.svg";
import customizable from "/images/icon-fully-customizable.svg";
import BoostDesktop from "/images/bg-boost-desktop.svg";
import BoostMobile from "/images/bg-boost-mobile.svg";

</script>

<template>
    <main
        class="w-full scroll-smooth flex flex-col overflow-x-hidden bg-neutral-100 relative"
    >
        <Navbar />
        <div
            class="w-full scroll-smooth flex flex-col md:flex-row-reverse bg-white pb-24 md:px-24 px-4 py-8 items-center"
        >
            <img
                :src="Working"
                class="md:translate-x-[10rem] aspect-[4/3] md:w-[40vw] translate-x-[3rem]"
            />
            <div class="py-[8rem] flex flex-col md:items-start items-center">
                <h2
                    class="text-[5rem] leading-tight font-black md:text-left text-center"
                >
                    More than just shorter links
                </h2>
                <p class="md:text-left text-center md:py-0 py-4">
                    Build your brand's recognition and get detailed insights on
                    how your links are performing.
                </p>
                <a
                    href="#input"
                    class="font-bold tracking-wide scale-125 md:scale-100 text-white bg-sky-400 py-3 px-8 rounded-full my-8"
                    >Get Started</a
                >
            </div>
        </div>
        <URLShortener />
        <div class="flex flex-col w-full md:px-24 px-8 py-8">
            <div class="flex flex-col w-full items-center py-16 gap-6">
                <h4 class="font-black text-3xl tracking-wide">
                    Advanced Statistics
                </h4>
                <p class="text-neutral-400 w-96 text-center">
                    Track how your links are performing across the web with our
                    advanced statistocs dashboard.
                </p>
            </div>
            <div
                class="w-full py-16 relative flex md:flex-row gap-8 flex-col items-center justify-between"
            >
                <div
                    class="w-full md:w-[calc(30%)] bg-white -translate-y-[2.5rem] rounded p-8 gap-4 flex pt-16 flex-col z-10 relative"
                >
                    <img
                        :src="recognition"
                        class="md:size-[4.5rem] absolute md:left-16 left-[50%] -translate-x-[50%] -translate-y-[6rem] p-5 overflow-visible rounded-full bg-violet-950"
                    />
                    <h4 class="font-bold text-lg tracking-wide">
                        Brand Recognition
                    </h4>
                    <p class="text-neutral-400">
                        Boost your brand recognition with each click. Generic
                        links don't mean a thing. Branded links help instill
                        confidence in your content.
                    </p>
                </div>
                <div
                    class="w-full md:w-[calc(30%)] bg-white rounded p-8 gap-4 flex pt-16 flex-col z-10 relative"
                >
                    <img
                        :src="records"
                        class="md:size-[4.5rem] absolute md:left-16 left-[50%] -translate-x-[50%] -translate-y-[6rem] p-5 overflow-visible rounded-full bg-violet-950"
                    />
                    <h4 class="font-bold text-lg tracking-wide">
                        Detailed Records
                    </h4>
                    <p class="text-neutral-400">
                        Gain insights into who is clicking your links. Knowing
                        when and where people engage with your content helps
                        inform better decisions.
                    </p>
                </div>
                <div
                    class="w-full md:w-[calc(30%)] bg-white translate-y-[2.5rem] rounded p-8 gap-4 flex pt-16 flex-col z-10 relative"
                >
                    <img
                        :src="customizable"
                        class="md:size-[4.5rem] absolute md:left-16 left-[50%] -translate-x-[50%] -translate-y-[6rem] p-5 overflow-visible rounded-full bg-violet-950"
                    />
                    <h4 class="font-bold text-lg tracking-wide">
                        Fully Customizable
                    </h4>
                    <p class="text-neutral-400">
                        Improve brand awarenessand content discoverability
                        through customizable links, supercharging audience
                        engagement.
                    </p>
                </div>
                <div
                    class="md:w-full absolute md:top-[50%] md:h-2 w-2 h-[calc(100%-10rem)] left-[50%] -translate-x-[50%] bg-cyan-400"
                ></div>
            </div>
        </div>
        <div v-bind:style="{backgroundImage: `url(${BoostDesktop})`}" class="w-full py-8 md:flex hidden flex-col gap-6 items-center bg-purple-900">
            <h2 class="text-2xl text-white font-black tracking-wide">Boost your links today</h2>
            <a
                href="#input"
                class="font-bold tracking-wide md:scale-100 text-white bg-sky-400 py-3 px-8 rounded-full"
                >Get Started</a
            >
        </div>
        <div v-bind:style="{backgroundImage: `url(${BoostMobile})`}" class="w-full py-20 md:hidden flex flex-col gap-6 items-center bg-purple-900">
            <h2 class="text-2xl text-white font-black tracking-wide">Boost your links today</h2>
            <a
                href="#input"
                class="font-bold tracking-wide md:scale-100 text-white bg-sky-400 py-3 px-8 rounded-full"
                >Get Started</a
            >
        </div>
        <FooterComponent />
    </main>
</template>
