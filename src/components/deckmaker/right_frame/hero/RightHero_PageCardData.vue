<script setup>

</script>

<template>
  <div class="page card-data">
    <div class="card-times"><span class="title">カード発動時間</span>
      <div class="time1_container">
        <div class="time1_item"><span class="label">無</span>
          <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span>
          </div>
        </div>
        <div class="time1_item"><span class="label">短</span>
          <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span>
          </div>
        </div>
        <div class="time1_item"><span class="label">長</span>
          <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span>
          </div>
        </div>
      </div>
      <div class="time2_container">
        <div class="time2_group">
          <div class="time2_item"><img class="label_image"
                                       src="http://cpsdm-assets.local.mfmii.work/img/icons/card_kin.jpg">
            <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span>
            </div>
          </div>
          <div class="time2_item"><img class="label_image"
                                       src="http://cpsdm-assets.local.mfmii.work/img/icons/card_kin.jpg">
            <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span>
            </div>
          </div>
        </div>
        <div class="time2_group">
          <div class="time2_item"><img class="label_image"
                                       src="http://cpsdm-assets.local.mfmii.work/img/icons/card_kin.jpg">
            <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span>
            </div>
          </div>
          <div class="time2_item"><img class="label_image"
                                       src="http://cpsdm-assets.local.mfmii.work/img/icons/card_kin.jpg">
            <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span>
            </div>
          </div>
        </div>
        <div class="time2_group">
          <div class="time2_item"><img class="label_image"
                                       src="http://cpsdm-assets.local.mfmii.work/img/icons/card_kin.jpg"><img
              class="label_image" src="http://cpsdm-assets.local.mfmii.work/img/icons/card_kin.jpg">
            <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-data {
  padding-top: 10px;
  /*
  .nockbacks {
    display: flex;
    flex-direction: row;
    margin: 5px 0;

    .nockback {
      flex: 1;
      margin: 0 5px;
      background: #f1f1f1;
      height: 60px;
      text-align: center;

      .title {
        color: #333;
        display: block;
        font-size: 14px;
      }

      img.val {
        height: 60%;
        margin: 0 auto;
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
  */

  .card-times {
    display: block;
    width: 100%;
    background: #fff8;

    .title {
      display: block;
      width: 100%;
      text-align: center;
      background: #fff;
      line-height: 24px;
      font-size: 18px;
      border: 1px solid #ddd;
    }

    .time1_container {
      display: flex;
      width: 100%;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-top: 5px;
      border-bottom: 2px solid #888;

      .time1_item {
        flex: 1;
        display: flex;
        flex-direction: row;
        font-size: 20px;

        //font-family: "DFSoGeiStd-W7", sans-serif;
        .label {
          border-right: 1px solid #888;
          height: 100%;
          display: block;
          padding-right: 5px;
        }

        .value_group {
          margin-left: 5px;
          display: flex;
          flex-direction: column;
          font-size: 16px;

          > span {
            display: block;

            > strong {
              font-size: 22px;
            }
          }
        }
      }
    }

    .time2_container {
      display: flex;
      flex-direction: column;

      .time2_group {
        display: flex;
        flex-direction: row;
        width: 100%;

        .time2_item {
          display: flex;
          flex-direction: row;
          flex: 1;
          justify-content: center;
          text-align: center;
          vertical-align: middle;
          align-items: center;
          margin: 5px;

          .label_image {
            height: 40px;
            margin: 0 5px;
          }

          .value_group {
            display: flex;
            flex-direction: column;

            > span {
              display: block;
              text-align: left;
              font-size: 16px;
              line-height: 20px;

              > strong {
                font-size: 26px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
