<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useI18n } from "vue-i18n";
// @ts-ignore
import { useStore } from "vuex";
import us from "@/assets/images/flag/us.svg";
import es from "@/assets/images/flag/es.svg";
import fr from "@/assets/images/flag/fr.svg";
import ru from "@/assets/images/flag/ru.svg";
import de from "@/assets/images/flag/de.svg";
import it from "@/assets/images/flag/it.svg";
import cn from "@/assets/images/flag/cn.svg";
import sa from "@/assets/images/flag/sa.svg";
import tr from "@/assets/images/flag/tr.svg";
import il from "@/assets/images/flag/il.svg";
import vn from "@/assets/images/flag/vn.svg";
import nl from "@/assets/images/flag/nl.svg";
import kr from "@/assets/images/flag/kr.svg";
import pt from "@/assets/images/flag/pt.svg";
const store = useStore();
const { t, locale } = useI18n();

// Language options
const languageSelect: Record<string, { id: string; flag: string; name: string }> = {
    en: { id: "us", flag: us, name: "English" },
    es: { id: "es", flag: es, name: "Spanish" },
    fr: { id: "fr", flag: fr, name: "French" },
    ru: { id: "ru", flag: ru, name: "Russian" },
    de: { id: "de", flag: de, name: "German" },
    it: { id: "it", flag: it, name: "Italian" },
    zh: { id: "cn", flag: cn, name: "Chinese" },
    ar: { id: "sa", flag: sa, name: "Arabic" },
    tr: { id: "tr", flag: tr, name: "Turkish" },
    he: { id: "il", flag: il, name: "Hebrew" },
    vi: { id: "vn", flag: vn, name: "Vietnamese" },
    nl: { id: "nl", flag: nl, name: "Dutch" },
    ko: { id: "kr", flag: kr, name: "Korean" },
    pt: { id: "pt", flag: pt, name: "Portuguese" },
};

// Reactive states
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const currentLocale = ref(store.getters.language);

// Computed property to get the selected language details
const selectedLanguage = computed(() => languageSelect[currentLocale.value]);

// Toggle dropdown visibility
const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

// Select a language and close the dropdown
const selectLanguage = (key: string) => {
    currentLocale.value = key;
    isOpen.value = false;
    changeLanguage();
};

// Change language logic
const changeLanguage = () => {
    locale.value = currentLocale.value;
    store.dispatch("updateLanguage", currentLocale.value);
    const modeElement = document.querySelector("[lang]");
    if (modeElement) {
        modeElement.setAttribute("lang", currentLocale.value);
    }
};

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

// Lifecycle hooks
onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
});

</script>

<template>
    <div class="relative" ref="dropdownRef">
        <!-- Dropdown Trigger -->
        <div @click="toggleDropdown" class="topbar-link">
            <img :src="selectedLanguage?.flag" alt="" class="object-cover rounded-md size-6" />
        </div>
        <!-- Dropdown Menu -->
        <ul v-show="isOpen"
            class="absolute w-40 p-2 py-3  mt-2 max-h-[calc(100vh_-_100px)] custom-scroll bg-white rounded-md shadow-md  dark:bg-dark-900 -left-32 top-12 ">
            <li v-for="(language, key) in languageSelect" :key="key" @click="selectLanguage(key)"
                class="flex items-center gap-2 p-2 py-2 ml-2 cursor-pointer dropdown-item">
                <img :src="language.flag" :alt="language.name" class="object-cover rounded-md size-5" />
                <span>{{ language.name }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.custom-scroll {
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 transparent;
}
</style>
