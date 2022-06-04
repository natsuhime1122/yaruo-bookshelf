<template>
  <div>
    <AdminHeader></AdminHeader>
    <b-container fluid>
      <b-row>
        <AdminSidebar></AdminSidebar>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view />
        </main>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AdminHeader from "@/components/layoutParts/AdminHeader.vue";
import AdminSidebar from "@/components/layoutParts/AdminSidebar.vue";

@Component({
  components: {
    AdminHeader,
    AdminSidebar,
  },
})
export default class AdminLayout extends Vue {}
</script>
