export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?:\p{Emoji_Presentation}\s)?(\w+)(?:\((.+)\))?:\s(.+)$/u,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
};
