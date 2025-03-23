chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const video = document
          .querySelector('[data-a-target="video-ref"]')
          .querySelector('video')

        if (!video) {
          return
        }

        if (document.pictureInPictureElement) {
          document.exitPictureInPicture()
        } else if (document.pictureInPictureEnabled) {
          video.requestPictureInPicture()
        }
      }
    })
  }
})
