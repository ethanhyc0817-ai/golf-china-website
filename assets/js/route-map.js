/* Golf China Co. — destination locator & journey route maps
   Usage:
     <div class="rm fade" data-map="locator" data-stop="beijing" data-caption="Beijing · North China"></div>
     <div class="rm fade" data-map="route"
          data-stops="beijing:Days 1–4|shanghai:Days 5–7|hangzhou:Days 8–10"
          data-legs="rail,rail"></div>
     Optional: data-region="hainan" for the island close-up. Include once per page:
     <script src="assets/js/route-map.js" defer></script>                        */
(function(){
"use strict";
var SVGNS="http://www.w3.org/2000/svg";
var LAND=["M653.4,100.1 658.3,101.5 662.9,103.3 667.1,105.6 670.8,108.3 674.2,111.4 677.0,114.7 679.3,118.3 681.0,122.1 682.2,126.1 684.1,129.1 686.9,131.1 690.4,132.1 694.8,132.1 698.6,131.7 702.0,130.9 705.0,129.6 707.4,127.9 710.5,126.4 714.1,124.9 718.2,123.5 722.9,122.3 726.1,122.3 727.7,123.5 727.8,126.1 726.3,129.9 724.9,133.2 723.5,135.9 722.3,138.0 721.2,139.6 720.2,141.9 719.1,144.9 718.1,148.7 717.1,153.3 715.9,157.7 714.5,161.9 712.8,166.0 710.9,170.0 708.6,172.8 705.9,174.4 702.8,174.9 699.3,174.2 696.1,174.0 693.2,174.3 690.5,175.2 688.0,176.7 686.4,178.6 685.5,181.0 685.5,183.9 686.2,187.4 686.7,191.1 686.9,195.1 686.7,199.5 686.3,204.1 685.7,207.6 684.7,210.0 683.5,211.3 682.1,211.4 681.0,211.9 680.3,213.0 679.9,214.5 679.9,216.5 679.5,217.4 678.6,217.2 677.2,216.0 675.3,213.7 673.7,212.5 672.2,212.5 670.9,213.5 669.8,215.7 667.8,217.7 665.0,219.6 661.4,221.4 657.0,223.1 653.8,224.8 651.9,226.7 651.1,228.6 651.5,230.6 651.3,232.1 650.2,233.0 648.5,233.4 646.0,233.3 643.9,232.9 641.9,232.2 640.3,231.3 639.0,230.1 637.5,229.9 635.8,230.6 634.0,232.4 632.0,235.1 629.8,237.6 627.2,239.9 624.4,242.1 621.2,244.2 618.3,246.3 615.6,248.5 613.0,250.8 610.7,253.2 608.0,255.3 604.8,257.0 601.2,258.4 597.3,259.5 593.7,260.7 590.7,262.1 588.1,263.7 586.0,265.4 583.7,267.0 581.1,268.3 578.3,269.5 575.2,270.5 573.3,270.8 572.5,270.5 572.9,269.5 574.4,267.8 575.4,266.1 575.8,264.6 575.8,263.0 575.2,261.6 575.3,259.9 576.1,257.9 577.6,255.7 579.9,253.2 581.2,250.8 581.6,248.6 581.0,246.5 579.5,244.5 577.8,243.3 575.8,243.0 573.5,243.5 571.1,244.9 568.4,246.5 565.5,248.5 562.5,250.8 559.3,253.4 556.4,255.9 553.9,258.4 551.8,260.8 550.0,263.2 548.0,265.1 545.8,266.3 543.2,267.1 540.4,267.3 538.0,267.8 535.8,268.8 534.0,270.1 532.6,271.8 531.9,273.7 531.9,275.8 532.7,278.1 534.2,280.5 535.9,282.5 537.8,284.0 539.9,285.1 542.3,285.7 544.0,286.5 545.2,287.7 545.9,289.0 546.0,290.6 546.6,292.1 547.8,293.4 549.5,294.6 551.8,295.7 554.3,295.8 557.0,295.1 560.0,293.4 563.2,290.8 566.2,289.3 569.0,288.7 571.7,289.1 574.3,290.5 576.6,291.6 578.8,292.3 580.8,292.7 582.7,292.8 584.2,293.4 585.3,294.4 586.2,295.8 586.6,297.7 585.9,299.3 584.2,300.8 581.2,302.0 577.2,303.0 573.8,304.2 571.2,305.6 569.2,307.3 567.8,309.2 566.1,311.1 564.1,313.0 561.7,314.8 558.9,316.5 556.4,318.5 554.3,320.6 552.5,322.8 551.1,325.3 550.7,327.6 551.5,329.8 553.5,331.8 556.5,333.7 559.1,336.0 561.2,338.6 562.8,341.6 564.0,345.0 565.2,348.3 566.7,351.6 568.2,354.8 570.0,357.9 571.8,360.9 573.6,363.7 575.5,366.4 577.4,369.0 578.9,371.6 579.8,374.1 580.3,376.6 580.2,379.1 579.7,381.2 578.8,382.9 577.5,384.2 575.7,385.1 574.5,386.2 573.9,387.5 574.0,389.1 574.7,390.8 575.6,392.4 576.8,393.8 578.2,395.0 579.9,396.0 581.1,397.5 581.7,399.3 581.8,401.6 581.3,404.2 580.8,406.9 580.2,409.5 579.6,412.1 578.9,414.7 577.9,416.7 576.8,418.1 575.4,419.0 573.8,419.3 572.1,420.4 570.2,422.3 568.3,424.9 566.2,428.4 564.1,432.1 561.9,435.9 559.6,439.9 557.3,444.1 554.9,448.2 552.4,452.1 549.9,456.0 547.2,459.8 544.2,463.3 540.9,466.6 537.3,469.7 533.4,472.6 529.5,475.4 525.5,478.2 521.6,480.9 517.6,483.5 513.8,485.5 510.2,487.0 506.8,487.9 503.6,488.3 500.8,488.9 498.3,489.8 496.2,490.9 494.5,492.2 492.9,493.0 491.5,493.2 490.4,492.8 489.4,491.8 488.2,491.4 486.9,491.7 485.5,492.6 483.9,494.1 481.6,495.7 478.8,497.2 475.5,498.7 471.5,500.3 467.7,501.5 464.2,502.5 461.0,503.3 457.9,503.7 455.4,504.9 453.4,506.8 452.0,509.3 451.0,512.5 449.9,515.0 448.6,516.7 447.2,517.6 445.6,517.8 444.2,517.4 443.0,516.4 442.1,514.7 441.3,512.5 440.9,510.6 440.9,508.9 441.2,507.4 441.9,506.3 441.4,505.1 439.9,504.0 437.2,503.0 433.3,502.0 430.1,501.4 427.5,501.2 425.6,501.3 424.2,501.8 422.5,502.0 420.4,501.8 417.9,501.4 415.0,500.6 412.5,499.6 410.4,498.6 408.7,497.5 407.3,496.2 406.4,494.9 406.0,493.3 406.0,491.7 406.4,489.9 406.1,488.4 405.0,487.3 403.2,486.4 400.6,485.8 398.3,485.1 396.3,484.3 394.6,483.2 393.2,482.1 391.6,481.6 389.7,481.9 387.5,482.8 385.1,484.5 382.6,485.8 380.0,486.8 377.3,487.5 374.5,487.8 371.9,488.1 369.3,488.3 366.9,488.3 364.7,488.3 362.6,488.5 360.7,488.9 358.9,489.4 357.4,490.2 355.9,490.9 354.4,491.5 352.9,492.0 351.4,492.5 350.4,493.7 349.9,495.7 349.9,498.4 350.3,501.9 350.2,504.5 349.7,506.2 348.7,507.1 347.1,507.0 345.9,506.7 345.0,506.3 344.5,505.8 344.2,505.1 344.0,504.2 343.8,503.2 343.7,502.1 343.6,500.8 343.0,500.1 341.9,499.9 340.3,500.2 338.2,501.1 336.4,501.7 334.7,501.8 333.3,501.6 332.0,501.1 330.6,500.3 328.9,499.5 327.0,498.5 324.9,497.3 323.5,495.8 322.8,494.0 322.9,491.7 323.8,489.2 323.9,487.1 323.5,485.5 322.3,484.4 320.5,483.8 319.0,482.7 317.7,480.9 316.8,478.6 316.1,475.8 314.8,473.7 313.0,472.6 310.6,472.2 307.5,472.8 305.4,472.2 304.0,470.6 303.5,468.0 303.9,464.2 304.8,460.8 306.3,457.6 308.4,454.7 311.2,452.1 313.2,449.4 314.6,446.8 315.4,444.2 315.5,441.5 315.6,439.0 315.6,436.4 315.5,433.9 315.5,431.5 315.1,429.4 314.4,427.8 313.5,426.6 312.2,425.9 311.0,424.8 309.9,423.5 308.9,421.9 308.0,420.0 306.8,418.6 305.5,417.8 304.0,417.5 302.4,417.7 300.3,417.8 298.0,417.7 295.2,417.4 292.2,416.9 290.1,416.2 289.0,415.2 289.0,414.1 290.0,412.7 290.4,411.2 290.2,409.5 289.4,407.6 288.1,405.6 286.6,404.4 284.9,404.1 283.0,404.6 281.0,406.0 278.9,406.8 276.6,407.1 274.3,406.9 271.9,406.1 269.3,406.0 266.5,406.6 263.4,408.0 260.1,410.0 257.0,412.2 254.1,414.5 251.3,416.8 248.7,419.2 246.2,421.1 243.7,422.5 241.4,423.4 239.1,423.8 237.0,423.9 235.3,423.7 233.7,423.1 232.5,422.2 231.2,421.6 229.8,421.1 228.4,420.8 226.9,420.7 225.2,420.5 223.4,420.1 221.5,419.5 219.5,418.8 217.6,418.4 215.8,418.4 214.1,418.9 212.6,419.7 211.0,420.9 209.2,422.5 207.4,424.5 205.6,426.9 204.1,428.1 203.0,428.0 202.4,426.7 202.1,424.1 201.5,422.4 200.5,421.5 199.2,421.4 197.4,422.0 195.3,422.5 192.8,422.7 189.8,422.6 186.5,422.3 183.2,421.9 179.9,421.3 176.7,420.7 173.4,419.9 170.4,419.0 167.7,418.0 165.1,416.7 162.8,415.3 160.5,414.0 158.3,413.0 156.0,412.2 153.8,411.5 151.9,410.7 150.3,409.6 149.0,408.2 148.1,406.7 147.0,405.4 145.7,404.3 144.2,403.6 142.6,403.1 140.7,402.2 138.5,400.9 135.9,399.2 133.0,397.1 130.3,395.2 127.7,393.6 125.3,392.3 123.0,391.3 121.0,390.8 119.3,390.6 117.8,391.0 116.6,391.8 114.7,391.8 112.2,391.0 108.9,389.5 104.9,387.2 101.3,384.9 97.9,382.7 94.8,380.5 92.0,378.4 89.7,375.9 87.9,373.0 86.6,369.7 85.8,366.0 85.7,363.3 86.3,361.7 87.6,361.1 89.7,361.5 91.3,361.4 92.3,360.8 92.9,359.6 93.0,357.9 92.8,356.2 92.3,354.4 91.4,352.7 90.3,350.9 89.5,348.9 89.1,346.6 89.0,344.1 89.3,341.3 88.8,338.2 87.4,334.7 85.2,331.0 82.1,326.9 78.6,323.5 74.7,320.7 70.5,318.7 65.8,317.2 62.0,315.5 59.3,313.4 57.5,311.0 56.6,308.3 55.5,305.9 54.0,303.7 52.2,301.7 50.1,300.1 48.4,298.6 47.1,297.2 46.2,296.0 45.6,295.0 45.2,293.7 44.7,292.2 44.2,290.4 43.8,288.3 43.5,286.4 43.4,284.7 43.3,283.1 43.4,281.7 43.1,280.5 42.2,279.3 41.0,278.4 39.2,277.5 37.7,277.0 36.4,276.8 35.2,276.8 34.3,277.2 33.4,276.6 32.6,275.1 31.8,272.7 31.1,269.3 30.7,266.5 30.8,264.4 31.2,262.9 32.0,262.1 32.5,261.2 32.7,260.3 32.7,259.5 32.3,258.6 32.7,257.5 33.8,256.2 35.8,254.7 38.5,252.9 41.0,251.4 43.4,250.2 45.5,249.2 47.5,248.4 49.7,248.0 52.2,247.9 55.0,248.1 58.0,248.6 60.5,248.4 62.6,247.4 64.1,245.7 65.2,243.3 66.9,241.4 69.3,240.0 72.3,239.0 76.0,238.6 79.0,237.9 81.3,236.9 83.0,235.7 84.0,234.2 85.9,232.5 88.7,230.7 92.3,228.8 96.8,226.7 100.3,224.9 102.7,223.5 104.1,222.3 104.5,221.4 104.8,220.2 104.9,218.7 104.8,216.8 104.6,214.6 104.9,212.7 105.7,211.1 107.2,209.7 109.1,208.7 109.9,206.2 109.6,202.3 108.2,196.9 105.6,190.0 105.1,184.4 106.7,180.1 110.3,177.2 115.9,175.6 120.5,174.1 124.1,172.9 126.6,171.8 128.0,170.9 129.6,168.4 131.4,164.2 133.3,158.4 135.4,151.0 138.3,145.8 142.2,142.8 146.9,142.0 152.6,143.3 157.2,143.9 160.9,143.7 163.5,142.6 165.1,140.7 166.3,138.2 167.1,135.1 167.6,131.4 167.8,127.1 168.5,123.8 169.7,121.5 171.5,120.1 173.9,119.7 176.2,118.7 178.5,117.1 180.7,114.8 182.9,111.9 184.8,109.7 186.4,108.0 187.8,107.0 188.9,106.7 190.0,107.2 190.9,108.5 191.7,110.7 192.5,113.7 193.6,116.6 195.2,119.2 197.2,121.7 199.6,124.0 202.4,126.1 205.6,128.0 209.3,129.8 213.4,131.4 216.9,133.4 219.9,135.9 222.4,138.8 224.4,142.2 225.6,146.0 226.0,150.1 225.7,154.5 224.6,159.4 224.0,163.4 224.0,166.7 224.5,169.3 225.5,171.0 227.1,172.5 229.3,173.7 232.1,174.7 235.5,175.4 239.0,176.1 242.6,176.7 246.4,177.3 250.2,177.8 254.0,178.9 257.6,180.4 261.1,182.4 264.6,184.9 267.6,186.9 270.2,188.4 272.4,189.3 274.2,189.8 275.8,191.0 277.3,193.1 278.8,195.9 280.1,199.6 281.5,202.9 282.9,205.8 284.5,208.5 286.2,210.8 288.2,212.5 290.6,213.6 293.4,214.2 296.6,214.1 300.4,214.2 304.9,214.6 310.1,215.2 316.0,216.1 321.4,216.6 326.2,216.8 330.5,216.6 334.3,216.1 337.9,215.8 341.2,215.8 344.2,216.1 347.0,216.7 350.2,217.7 353.7,219.2 357.6,221.1 361.8,223.4 365.8,225.2 369.7,226.3 373.3,226.9 376.8,226.9 379.7,227.2 382.0,227.8 383.9,228.7 385.1,229.9 386.9,230.3 389.2,229.8 392.0,228.6 395.3,226.5 399.0,224.6 402.9,222.9 407.2,221.4 411.8,220.1 416.3,219.0 420.8,218.3 425.1,217.9 429.4,217.7 433.5,217.3 437.3,216.5 440.8,215.4 444.2,214.1 447.2,212.5 449.9,210.8 452.2,208.9 454.3,206.8 456.3,204.9 458.3,203.2 460.3,201.7 462.3,200.3 463.7,199.0 464.5,197.7 464.6,196.4 464.2,195.1 463.6,193.7 462.9,192.3 462.1,190.8 461.2,189.3 460.9,187.5 461.2,185.4 462.1,183.1 463.6,180.5 465.1,178.7 466.7,177.6 468.2,177.2 469.8,177.6 471.8,178.0 474.0,178.6 476.6,179.3 479.6,180.1 482.5,180.2 485.4,179.6 488.2,178.2 491.1,176.0 494.3,174.0 497.9,172.1 501.9,170.4 506.2,168.8 510.0,167.0 513.2,164.8 515.9,162.4 518.0,159.7 520.0,157.4 522.1,155.4 524.1,153.8 526.1,152.7 528.7,151.6 531.7,150.8 535.4,150.1 539.5,149.5 543.2,149.2 546.4,149.2 549.1,149.4 551.3,149.9 553.1,149.8 554.4,149.3 555.2,148.3 555.5,146.9 555.1,145.0 553.9,142.8 552.1,140.2 549.5,137.3 547.0,134.7 544.6,132.6 542.2,130.8 539.9,129.4 537.6,128.8 535.4,128.9 533.2,129.8 531.0,131.3 528.6,132.3 526.1,132.8 523.5,132.7 520.7,132.0 518.1,131.7 515.9,131.6 514.0,131.8 512.4,132.4 511.0,132.4 509.8,131.8 508.9,130.6 508.1,128.8 508.1,126.5 508.7,123.4 510.1,119.8 512.1,115.5 513.9,111.4 515.6,107.6 517.2,104.0 518.6,100.7 520.5,98.6 522.9,97.8 525.8,98.2 529.2,99.9 532.8,100.4 536.5,99.9 540.4,98.2 544.4,95.4 547.4,92.8 549.4,90.4 550.4,88.3 550.4,86.3 551.0,83.6 552.3,80.2 554.2,76.1 556.8,71.3 559.1,67.3 561.2,64.2 563.0,61.9 564.6,60.4 565.8,58.6 566.6,56.6 566.9,54.3 566.9,51.7 566.5,49.5 565.7,47.7 564.5,46.2 562.9,45.1 562.3,43.6 562.7,41.9 564.1,39.9 566.5,37.5 569.1,35.5 572.1,33.9 575.3,32.7 578.9,31.8 582.5,31.1 586.1,30.6 589.8,30.3 593.6,30.2 597.5,30.5 601.6,31.1 605.7,32.1 610.0,33.6 613.8,35.1 617.2,36.6 620.1,38.3 622.6,40.0 625.0,42.5 627.1,45.8 629.0,49.7 630.8,54.4 632.4,58.4 633.8,61.8 635.1,64.4 636.1,66.4 637.2,68.6 638.2,71.0 639.2,73.6 640.2,76.3 641.2,79.5 642.2,83.1 643.3,87.1 644.3,91.4 646.4,95.1 649.4,98.0Z", "M444.6,539.6 442.2,541.1 439.7,541.9 437.3,542.2 435.0,541.9 432.6,540.9 430.8,539.6 429.6,537.8 429.0,535.6 428.9,533.0 429.2,530.8 429.9,528.8 430.9,527.1 432.3,525.7 434.1,524.5 436.4,523.4 439.1,522.4 442.2,521.5 444.9,520.9 447.3,520.5 449.3,520.4 451.0,520.4 452.4,520.8 453.5,521.4 454.4,522.3 455.0,523.4 455.2,524.6 454.9,525.9 454.1,527.2 452.8,528.5 451.7,529.9 450.8,531.5 450.0,533.1 449.3,534.9 448.2,536.5 446.6,538.1Z", "M576.3,474.8 574.5,479.8 572.9,484.2 571.5,487.9 570.1,491.1 568.9,493.6 567.6,494.9 566.3,494.8 564.8,493.5 563.3,490.9 562.1,488.4 561.2,485.9 560.6,483.5 560.3,481.2 560.4,478.8 561.1,476.1 562.3,473.2 564.0,470.1 565.8,467.2 567.8,464.5 569.9,461.9 572.2,459.6 574.2,458.0 576.0,457.3 577.6,457.4 578.9,458.3 579.7,459.5 580.1,460.9 580.1,462.6 579.6,464.5 578.8,467.2 577.7,470.6Z"];
var MAP={w:760,h:573};
var HAINAN_VB={w:520,h:446};
var HAINAN_PATH="M301.7,358.9 C289.7,367.1 275.8,377.2 262.5,383.4 C249.1,389.7 234.9,393.5 221.6,396.5 C208.2,399.5 195.1,401.4 182.3,401.4 C169.5,401.4 157.5,400.1 144.7,396.5 C131.9,393.0 116.9,386.4 105.5,380.2 C94.0,373.9 84.2,367.4 76.1,358.9 C67.9,350.5 61.3,340.4 56.4,329.5 C51.5,318.6 48.5,306.6 46.6,293.5 C44.7,280.4 44.5,264.1 45.0,251.0 C45.5,237.9 47.2,226.5 49.9,215.0 C52.6,203.6 56.7,192.4 61.3,182.3 C66.0,172.3 71.2,163.0 77.7,154.5 C84.2,146.1 91.9,138.7 100.6,131.7 C109.3,124.6 118.8,118.3 130.0,112.0 C141.2,105.8 154.0,99.8 167.6,94.0 C181.2,88.3 196.0,82.9 211.8,77.7 C227.6,72.5 246.6,67.1 262.5,63.0 C278.3,58.9 292.7,55.9 306.6,53.2 C320.5,50.4 333.8,48.0 345.8,46.6 C357.8,45.3 368.5,45.3 378.5,45.0 C388.6,44.7 397.9,43.9 406.3,45.0 C414.8,46.1 422.4,48.8 429.2,51.5 C436.0,54.3 441.8,57.3 447.2,61.3 C452.7,65.4 457.8,70.6 461.9,76.1 C466.0,81.5 469.6,87.8 471.7,94.0 C473.9,100.3 475.3,106.9 475.0,113.7 C474.7,120.5 473.1,127.8 470.1,134.9 C467.1,142.0 462.7,149.1 457.0,156.2 C451.3,163.3 442.3,170.1 435.8,177.4 C429.2,184.8 423.2,192.1 417.8,200.3 C412.3,208.5 407.7,217.8 403.1,226.5 C398.4,235.2 394.1,243.4 390.0,252.6 C385.9,261.9 383.4,272.8 378.5,282.1 C373.6,291.3 367.9,299.5 360.6,308.2 C353.2,317.0 344.2,325.9 334.4,334.4 C324.6,342.8 313.7,350.7 301.7,358.9 Z";
/* Full-China pin coordinates (same projection as the homepage map). */
var CITIES={
  beijing:   {x:517.5,y:256.5,label:"Beijing",   lx:11, ly:4,  anchor:"start"},
  shanghai:  {x:568.8,y:384.8,label:"Shanghai",  lx:12, ly:-2, anchor:"start"},
  hangzhou:  {x:555.0,y:397.0,label:"Hangzhou",  lx:-11,ly:16, anchor:"end"},
  lijiang:   {x:341.8,y:448.3,label:"Lijiang",   lx:-12,ly:-4, anchor:"end"},
  yunnan:    {x:341.8,y:448.3,label:"Yunnan",    lx:-12,ly:4,  anchor:"end"},
  springcity:{x:369.9,y:471.5,label:"Spring City",lx:-11,ly:17,anchor:"end"},
  kunming:   {x:369.9,y:471.5,label:"Kunming",   lx:-11,ly:17, anchor:"end"},
  guilin:    {x:450.1,y:456.8,label:"Guilin",    lx:12, ly:-2, anchor:"start"},
  haikou:    {x:447.4,y:521.7,label:"Haikou",    lx:12, ly:-3, anchor:"start"},
  hainan:    {x:443.3,y:531.2,label:"Hainan",    lx:12, ly:4,  anchor:"start"}
};
/* Hainan close-up coordinates. */
var HCITIES={
  haikou: {x:347.5,y:66.3, label:"Haikou", lx:14, ly:-6, anchor:"start"},
  wanning:{x:357.3,y:287.0,label:"Wanning",lx:14, ly:-2, anchor:"start"},
  sanya:  {x:202.0,y:383.4,label:"Sanya",  lx:0,  ly:24, anchor:"middle"}
};
var DEST_KEYS=["beijing","shanghai","yunnan","hainan"];
var REDUCED=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;

var CSS=""+
".rm-panel{background:var(--pine,#1f3d2e);border:1px solid rgba(184,145,80,.3);border-radius:2px;padding:24px 24px 18px}"+
".rm-mini .rm-panel{padding:18px 18px 14px}"+
".rm-eyebrow{font-family:var(--sans);font-size:12px;font-weight:500;letter-spacing:.28em;text-transform:uppercase;color:var(--gold,#b89150)}"+
".rm-sub{font-family:var(--sans);font-size:14px;font-weight:300;color:rgba(255,255,255,.72);margin-top:6px;letter-spacing:.04em}"+
".rm-svg{width:100%;height:auto;display:block;margin-top:14px}"+
".rm-mini .rm-svg{margin-top:0}"+
".rm-land{fill:rgba(255,255,255,.055);stroke:rgba(184,145,80,.5);stroke-linejoin:round}"+
".rm-cap{font-family:var(--sans);margin-top:10px;font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.45);text-align:center}"+
".rm-legend{display:flex;gap:22px;justify-content:center;margin-top:12px;font-family:var(--sans);font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.5)}"+
".rm-legend span{display:inline-flex;align-items:center;gap:8px}"+
".rm-legend svg{display:block}"+
".rm-leg{fill:none;stroke:var(--gold,#b89150);stroke-linecap:round}"+
".rm-pin-dot{fill:var(--gold,#b89150)}"+
".rm-pin-num{fill:#14241c;font-family:var(--sans);font-weight:500}"+
".rm-city{fill:rgba(255,255,255,.92);font-family:var(--sans);text-transform:uppercase;letter-spacing:.14em}"+
".rm-days{fill:var(--gold,#b89150);font-family:var(--sans);text-transform:uppercase;letter-spacing:.12em}"+
".rm-ctx{fill:rgba(255,255,255,.22)}"+
".rm-anim .rm-stop{opacity:0;transition:opacity .5s ease}"+
".rm-anim.rm-go .rm-stop{opacity:1}"+
"/* two-column overview layout used on itinerary pages */"+
".rm-cols{display:grid;grid-template-columns:1.05fr 1fr;gap:44px;align-items:start}"+
"@media(max-width:900px){.rm-cols{grid-template-columns:1fr;gap:32px}}";

function el(tag,attrs,parent){var n=document.createElementNS(SVGNS,tag);if(attrs)for(var k in attrs)n.setAttribute(k,attrs[k]);if(parent)parent.appendChild(n);return n;}
function div(cls,parent){var n=document.createElement("div");if(cls)n.className=cls;if(parent)parent.appendChild(n);return n;}

function makeSvg(vb,renderW,label){
  var svg=el("svg",{class:"rm-svg",viewBox:vb.x+" "+vb.y+" "+vb.w+" "+vb.h,role:"img","aria-label":label});
  /* px(v): convert a desired on-screen pixel size to viewBox units */
  svg._px=function(v){return v*vb.w/Math.max(renderW,220);};
  return svg;
}
var RMID=0;
function drawLand(svg,region,px,vb){
  var paths=region==="hainan"?[HAINAN_PATH]:LAND;
  var g=el("g",null,svg);
  if(region!=="hainan"&&vb&&(vb.x>0||vb.y>0||vb.x+vb.w<MAP.w||vb.y+vb.h<MAP.h)){
    var id="rm-fade-"+(++RMID),defs=el("defs",null,svg),m=el("mask",{id:id},defs);
    el("rect",{x:vb.x-30,y:vb.y-30,width:vb.w+60,height:vb.h+60,fill:"#fff"},m);
    var F=px(26);
    function grad(gid,x1,y1,x2,y2){var lg=el("linearGradient",{id:gid,x1:x1,y1:y1,x2:x2,y2:y2},defs);
      el("stop",{offset:"0","stop-color":"#000"},lg);el("stop",{offset:"1","stop-color":"#000","stop-opacity":"0"},lg);return gid;}
    if(vb.x>0){el("rect",{x:vb.x,y:vb.y-30,width:F,height:vb.h+60,fill:"url(#"+grad(id+"l","0","0","1","0")+")"},m);}
    if(vb.x+vb.w<MAP.w){el("rect",{x:vb.x+vb.w-F,y:vb.y-30,width:F,height:vb.h+60,fill:"url(#"+grad(id+"r","1","0","0","0")+")"},m);}
    if(vb.y>0){el("rect",{x:vb.x-30,y:vb.y,width:vb.w+60,height:F,fill:"url(#"+grad(id+"t","0","0","0","1")+")"},m);}
    if(vb.y+vb.h<MAP.h){el("rect",{x:vb.x-30,y:vb.y+vb.h-F,width:vb.w+60,height:F,fill:"url(#"+grad(id+"b","0","1","0","0")+")"},m);}
    g.setAttribute("mask","url(#"+id+")");
  }
  for(var i=0;i<paths.length;i++){
    el("path",{class:"rm-land",d:paths[i],"stroke-width":px(1)},g);
  }
  if(region==="hainan"){
    var t=el("text",{x:250,y:232,"text-anchor":"middle","font-size":px(11.5),fill:"rgba(255,255,255,.2)",style:"font-family:var(--sans);letter-spacing:.42em;text-transform:uppercase"},svg);
    t.textContent="Hainan";
  }
}
function cityset(region){return region==="hainan"?HCITIES:CITIES;}

/* ---------- locator ---------- */
function buildLocator(host){
  var stop=CITIES[host.dataset.stop];if(!stop)return;
  var panel=div("rm-panel",host);host.classList.add("rm-mini");
  var renderW=host.clientWidth||320;
  var svg=makeSvg({x:0,y:0,w:MAP.w,h:MAP.h},renderW,"Map of China locating "+stop.label);
  panel.appendChild(svg);
  var px=svg._px;
  drawLand(svg,"china",px,null);
  /* faint context dots for the other destinations */
  for(var i=0;i<DEST_KEYS.length;i++){
    var c=CITIES[DEST_KEYS[i]];
    if(c.x===stop.x&&c.y===stop.y)continue;
    el("circle",{class:"rm-ctx",cx:c.x,cy:c.y,r:px(2.5)},svg);
  }
  /* pulsing pin */
  if(!REDUCED){
    var ring=el("circle",{cx:stop.x,cy:stop.y,r:px(4.5),fill:"none",stroke:"var(--gold,#b89150)","stroke-width":px(1),opacity:".5"},svg);
    var a1=el("animate",{attributeName:"r",values:px(4.5)+";"+px(13),dur:"2.8s",repeatCount:"indefinite"},ring);
    el("animate",{attributeName:"opacity",values:".55;0",dur:"2.8s",repeatCount:"indefinite"},ring);
  }
  el("circle",{class:"rm-pin-dot",cx:stop.x,cy:stop.y,r:px(4.5)},svg);
  var lbl=host.dataset.label||stop.label;
  var lines=lbl.split("\u00b7").map(function(v){return v.trim();});
  var t=el("text",{class:"rm-city",x:stop.x+px(stop.lx),y:stop.y+px(stop.ly),"text-anchor":stop.anchor,"font-size":px(12.5)},svg);
  if(lines.length>1){
    for(var li=0;li<lines.length;li++){
      var ts=el("tspan",{x:stop.x+px(stop.lx),dy:li?px(15):0},t);ts.textContent=lines[li];
    }
  }else{t.textContent=lbl;}
  svg.style.overflow="visible";
  if(host.dataset.caption){var cap=document.createElement("p");cap.className="rm-cap";cap.textContent=host.dataset.caption;panel.appendChild(cap);}
}

/* ---------- route ---------- */
function parseStops(host,region){
  var set=cityset(region),out=[];
  var parts=(host.dataset.stops||"").split("|");
  for(var i=0;i<parts.length;i++){
    var kv=parts[i].split(":"),c=set[kv[0].trim()];
    if(c)out.push({key:kv[0].trim(),days:(kv[1]||"").trim(),c:c});
  }
  return out;
}
function legPath(a,b,air,region){
  var mx=(a.x+b.x)/2,my=(a.y+b.y)/2,dx=b.x-a.x,dy=b.y-a.y;
  var d=Math.sqrt(dx*dx+dy*dy)||1;
  var nx=-dy/d,ny=dx/d; /* one perpendicular */
  if(region==="hainan"){ /* bow away from the island centre */
    var cx0=260,cy0=220;
    if((mx+nx-cx0)*(mx+nx-cx0)+(my+ny-cy0)*(my+ny-cy0) < (mx-nx-cx0)*(mx-nx-cx0)+(my-ny-cy0)*(my-ny-cy0)){nx=-nx;ny=-ny;}
  }else if(ny>0){nx=-nx;ny=-ny;} /* bow northwards */
  var bow=d*(air?0.16:(region==="hainan"?0.045:0.07));
  return "M"+a.x+","+a.y+" Q"+(mx+nx*bow)+","+(my+ny*bow)+" "+b.x+","+b.y;
}
function routeViewBox(stops,region,px){
  if(region==="hainan")return {x:0,y:0,w:HAINAN_VB.w,h:HAINAN_VB.h};
  var x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
  for(var i=0;i<stops.length;i++){var c=stops[i].c;
    x0=Math.min(x0,c.x);x1=Math.max(x1,c.x);y0=Math.min(y0,c.y);y1=Math.max(y1,c.y);}
  var padX=105,padY=72;
  x0=Math.max(0,x0-padX);y0=Math.max(0,y0-padY);
  x1=Math.min(MAP.w+22,x1+padX);y1=Math.min(MAP.h+16,y1+padY);
  return {x:x0,y:y0,w:x1-x0,h:y1-y0};
}
function buildRoute(host){
  var region=host.dataset.region||"china";
  var stops=parseStops(host,region);
  if(stops.length<2)return;
  var legsSpec=(host.dataset.legs||"").split(",");
  var panel=div("rm-panel",host);
  var head=div("rm-head",panel);
  var eb=document.createElement("span");eb.className="rm-eyebrow";eb.textContent=host.dataset.title||"The Route";head.appendChild(eb);
  var sub=document.createElement("p");sub.className="rm-sub";
  sub.textContent=host.dataset.caption||stops.map(function(s){return s.c.label;}).join(" → ");
  head.appendChild(sub);
  var renderW=host.clientWidth||560;
  var vb=routeViewBox(stops,region,null);
  var svg=makeSvg(vb,renderW,"Route map: "+sub.textContent);
  panel.appendChild(svg);
  var px=svg._px;
  drawLand(svg,region,px,vb);
  host.classList.add("rm-anim");
  var nLegs=stops.length-1;
  var legDur=Math.min(.9,3.4/nLegs),step=legDur+.18,base=.3;
  var hasAir=false,hasGround=false;
  var legs=[];
  for(var i=0;i<nLegs;i++){
    var air=(legsSpec[i]||"").trim()==="air";
    if(air)hasAir=true;else hasGround=true;
    var p=el("path",{class:"rm-leg",d:legPath(stops[i].c,stops[i+1].c,air,region),"stroke-width":px(1.4)},svg);
    p._air=air;legs.push(p);
  }
  /* stops on top of legs */
  for(var j=0;j<stops.length;j++){
    var s=stops[j],c=s.c;
    var g=el("g",{class:"rm-stop"},svg);
    if(!REDUCED)g.style.transitionDelay=(j===0?0:(base+(j-1)*step+legDur*.8)).toFixed(2)+"s";
    el("circle",{class:"rm-pin-dot",cx:c.x,cy:c.y,r:px(7)},g);
    var num=el("text",{class:"rm-pin-num",x:c.x,y:c.y,"text-anchor":"middle","dominant-baseline":"central","font-size":px(9)},g);
    num.textContent=String(j+1);
    var name=el("text",{class:"rm-city",x:c.x+px(c.lx),y:c.y+px(c.ly),"text-anchor":c.anchor,"font-size":px(12.5),"font-weight":"500"},g);
    name.textContent=c.label;
    if(s.days){
      var dy=c.ly<0?c.ly-13:c.ly+13; /* stack the day range on the far side of the name */
      var days=el("text",{class:"rm-days",x:c.x+px(c.lx),y:c.y+px(dy),"text-anchor":c.anchor,"font-size":px(10)},g);
      days.textContent=s.days;
    }
  }
  /* dash patterns + draw-on animation */
  function dotted(p){p.setAttribute("stroke-width",px(2));p.setAttribute("stroke-dasharray","0 "+px(5.5));}
  legs.forEach(function(p,i){
    var L=p.getTotalLength();
    if(REDUCED){if(p._air)dotted(p);return;}
    p.setAttribute("stroke-dasharray",L+" "+L);
    p.style.strokeDashoffset=L;
    p.style.transition="stroke-dashoffset "+legDur+"s ease "+(base+i*step).toFixed(2)+"s";
  });
  function go(){
    host.classList.add("rm-go");
    legs.forEach(function(p,i){
      p.style.strokeDashoffset=0;
      if(p._air)setTimeout(function(){dotted(p);},(base+i*step+legDur)*1000+80);
    });
  }
  if(REDUCED){host.classList.add("rm-go");}
  else{
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){go();io.unobserve(e.target);}});},{threshold:.3});
    io.observe(host);
  }
  /* legend */
  if(nLegs){
    var lg=div("rm-legend",panel);
    function item(dash,txt){
      var s=document.createElement("span");
      var sv=el("svg",{width:"26",height:"6",viewBox:"0 0 26 6"});
      el("line",{x1:"1",y1:"3",x2:"25",y2:"3",stroke:"var(--gold,#b89150)","stroke-width":dash?"2.4":"1.6","stroke-linecap":"round","stroke-dasharray":dash},sv);
      s.appendChild(sv);s.appendChild(document.createTextNode(txt));lg.appendChild(s);
    }
    if(hasGround)item("","Overland");
    if(hasAir)item("0 5.5","By air");
  }
}

function init(){
  var hosts=document.querySelectorAll("[data-map]");
  if(!hosts.length)return;
  var st=document.createElement("style");st.id="rm-style";st.textContent=CSS;document.head.appendChild(st);
  hosts.forEach(function(h){
    if(h.dataset.map==="locator")buildLocator(h);
    else if(h.dataset.map==="route")buildRoute(h);
  });
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
