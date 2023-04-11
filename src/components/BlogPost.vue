<template>
    <h2> {{ title }}</h2>
    <small> {{ date }}</small>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default {
  name: 'BlogPost',
  data() {
    return {
        bodyHTML: ""
    }
  },
  props: {
    bodyContent: {
        required: true
    },
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
  },
  mounted() {
    this.bodyHTML = documentToHtmlString(bodyContent);
    console.log('html', this.bodyHTML)
  }
}
</script>
