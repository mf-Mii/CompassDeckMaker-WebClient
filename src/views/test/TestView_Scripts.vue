<script setup>

</script>

<template>
  <div class="form-control">
    <h3>resources.ts</h3>
    <button type="button" class="btn btn-primary m-3" @click="loadResourcesMap">Load Resources Map</button><br>
    <label for="resourceId">リソースID</label>
    <input type="text" class="form-control" id="resourceId" placeholder="Resource Id" ref="resourceId" />
    <button type="button" class="btn btn-primary m-3" @click="loadResource">Load Resource</button><br>
    <textarea readonly class="form-control" id="resource" rows="2" ref="resource"></textarea>
  </div>
  <div class="d-flex flex-row">
  </div>
  <div class="d-flex flex-row">
  </div>
</template>

<style scoped lang="scss">

</style>
<script lang="ts">
import {getResource, getResourcesMap} from "@/script/resources.js";

class TestAbstract {
  constructor() {
    console.log('TestAbstract')
  }
}

class Test extends TestAbstract {
  constructor() {
    super();
    console.log('Test')
  }

  test(hoge: TestAbstract) {
    console.log(hoge)
  }
}

new Test().test(new Test())

export default {
  data() {
    return {
    }
  },
  methods: {
    loadResource() {
      console.log('loadResource')
      // @ts-ignore
      const resourceId = this.$refs.resourceId.value;
      try {
        // @ts-ignore
        this.$refs.resource.value = getResource(resourceId);
      } catch (e) {
        if (e instanceof Error) {
          // @ts-ignore
          this.$refs.resource.value = e.message;
        }
        console.error(e);
      }
    },
    loadResourcesMap() {
      getResourcesMap(true);
    }

  },
  computed: {
  },
}
</script>
