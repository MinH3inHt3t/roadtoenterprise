<template>
  <TagsProvider
    trackBy="id"
    @on-tag-added="onTagAdded"
    @on-tag-deleted="onTagDeleted"
    :options="$options.defaultTags"
  >
    <template #default="{ tags, addTag, deleteTag }">
      <!-- Vertical stack -->
      <div vertical class="mb-4">
        <!-- Label -->
        <label class="mb-2" for="tag-input">Tags</label>
        <!-- Horizontal stack -->
        <div v-if="tags.length" class="tags-container flex space-x-3">
          <!-- Loop through tags -->
          <Tag v-for="tag of tags" :key="tag.id" class="mb-2">
            <div class="tag-content">
              <!-- Tag text -->
              <span class="tag-text">
                {{ tag.text }}
              </span>
              <!-- Delete tag icon -->
              <button
                class="tag-delete-icon"
                @click.prevent="deleteTag(tag.id)"
              >
                x
              </button>
            </div>
          </Tag>
        </div>
        <!-- Add new tag input -->
        <input
          v-model="value"
          type="text"
          id="tag-input"
          placeholder="Add a tag..."
          @keyup.enter="onAddTag(addTag)"
        />
      </div>
      <!-- Submit tag -->
      <button class="btn" @click.prevent="onAddTag(addTag)">Add tag</button>
    </template></TagsProvider
  >
</template>
<script>
// @ is an alias to /src
import TagsProvider from "@/components/common/TagsProvider.vue";
import Tag from "@/components/common/Tag.vue";
// You can put it in /helpers directory
const getRandomUUID = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);
export default {
  name: "TagsExample",
  components: {
    TagsProvider,
    Tag,
  },
  data() {
    return {
      value: "",
    };
  },
  created() {
    this.$options.defaultTags = [
      {
        id: getRandomUUID(),
        text: "Apple",
      },
      {
        id: getRandomUUID(),
        text: "Orange",
      },
      {
        id: getRandomUUID(),
        text: "Banana",
      },
    ];
  },
  methods: {
    onTagAdded({ tags, value }) {
      console.log("Tag added", { tags, value });
    },
    onTagDeleted({ tags, value }) {
      console.log("Tag deleted", { tags, value });
    },
    onAddTag(addTag) {
      // addTag is coming from the TagsProvider
      addTag({
        id: getRandomUUID(),
        text: this.value,
      });
      this.value = "";
    },
  },
};
</script>
