import { defineConfig } from "vuepress/config";

export default defineConfig({
  title: "Hello Linux",
  base: "/learn_linux/",
  themeConfig: {
    docsRepo: "sword4869/learn_linux",
    docsBranch: "main",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",

    sidebar: [
      ["/", "README"],
      {
        title: "advance",
        children: [
          ["/advance/Bash Heredoc.md", "Bash Heredoc.md"],
          ["/advance/Linux-Mint.md", "Linux-Mint.md"],
          ["/advance/PS1.md", "PS1.md"],
          ["/advance/openssh.md", "openssh.md"],
          ["/advance/screen.md", "screen.md"],
          ["/advance/vim.md", "vim.md"],
        ],
      },
      {
        title: "basic",
        children: [
          ["/basic/bash srcipt.md", "bash srcipt.md"],
          ["/basic/boot.md", "boot.md"],
          ["/basic/compress.md", "compress.md"],
          ["/basic/directory architecture.md", "directory architecture.md"],
          ["/basic/drivers.md", "drivers.md"],
          ["/basic/environmental variables.md", "environmental variables.md"],
          ["/basic/file permission.md", "file permission.md"],
          ["/basic/filesystem.md", "filesystem.md"],
          ["/basic/find file.md", "find file.md"],
          ["/basic/information.md", "information.md"],
          ["/basic/ip.md", "ip.md"],
          ["/basic/logging.md", "logging.md"],
          ["/basic/package manager.md", "package manager.md"],
          ["/basic/process.md", "process.md"],
          ["/basic/service.md", "service.md"],
          ["/basic/text manipulation.md", "text manipulation.md"],
        ],
      },
      {
        title: "trick",
        children: [["/trick/cli_history.md", "cli_history.md"]],
      },
    ],
  },
});
