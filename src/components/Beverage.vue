<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />

    <Contents>
      <!-- TOP -->
      <template v-slot:top>
        <Creamer v-if="beverageStore.currentCreamer.name !== 'No Cream'" />
        <Syrup
          v-else-if="beverageStore.currentSyrup.name !== 'No Syrup'"
        />
      </template>

      <!-- MIDDLE -->
      <template v-slot:mid>
        <Syrup
          v-if="
            beverageStore.currentCreamer.name !== 'No Cream' &&
            beverageStore.currentSyrup.name !== 'No Syrup'
          "
        />
      </template>

      <!-- BOTTOM -->
      <template v-slot:bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import { useBeverageStore } from "../stores/beverageStore";

const beverageStore = useBeverageStore();

type Props = {
  isIced: boolean;
};

defineProps<Props>();
</script>