window.onload = function() {
    document.getElementById('main-content').innerHTML = 'Hello, github pages :)'
  }


 document.addEventListener('DOMContentLoaded', (event) => {
    const AdController = window.Adsgram.init({ blockId: "your-block-id" });

    // 假設您有一個按鈕用於觸發廣告
    const showAdButton = document.getElementById('showAdButton');
    showAdButton.addEventListener('click', () => {
        AdController.show().then((result) => {
            if (result.done) {
                // 用戶觀看廣告直到結束
                console.log("User watched the ad till the end");
                // 在這裡編寫您的代碼來獎勵用戶
            }
        }).catch((result) => {
            if (result.error) {
                // 用戶在播放廣告過程中遇到錯誤
                console.log("An error occurred while playing the ad");
            } else {
                // 用戶跳過廣告
                console.log("User skipped the ad");
            }
        }).finally(() => {
            // 在這裡編寫您的附加操作代碼
            console.log("Ad interaction completed");
        });
    });
});
