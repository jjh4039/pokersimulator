var ped = ['족보',0,0,0,0,0,0,0,0,0,0,0,0,0]
var t = 0

document.addEventListener('DOMContentLoaded', () => {
    var btnTag = document.querySelector('#id_btn')
    var outTag = document.querySelector('#id_out')

    btnTag.addEventListener('click', (event) => 
    {
        var result = getPrize()
        outTag.textContent = `결과 : ${result}`
        btnTag.disabled = false;
        reload();
    })
})

var getPrize = function() {
    t++;
    var ranNum = Math.floor((Math.random() * 999999) + 1)
    var gift = ['1. Royal Straight Flush, 로열 스트레이트 플러쉬 (0.0032%)',
                   '2. Back Straight Flush, 백 스트레이트 플러쉬 (0.0032%)',
                    '3. Straight Flush, 스트레이트 플러쉬 (0.0247%)',
                     '4. Four of a Kind, 포 카드 (0.168%)',
                     '5. Full House, 풀 하우스 (2.60%)',
                     '6. Flush, 플러쉬 (3.03%)',
                     '7. Mountain, 마운틴 (0.45%)',
                     '8. Back Straight, 백 스트레이트 (0.45%)',
                     '9. Straight, 스트레이트 (4.55%)',
                     '10. Triple, 트리플 (4.83%)',
                     '11. Two Pair, 투페어 (23.5%)',
                     '12. One Pair, 원페어 (43.8%)',
                     '13. No Pair, 탑 (17.4%)']
    var pbt = [32,64,311,1991,27991,58291,62791,67291,112791,161091,396091,834091]
    var res = ''

    for (let i = 0; i < gift.length; i++) {
        if(pbt[i] >= ranNum){
            res = gift[i]
            ped[i+1] += 1      
            return res
        }
        else if (pbt[pbt.length - 1] < ranNum) {
            res = gift[gift.length - 1]
            ped[13] += 1
            return res
        }
    }
}

function reload(){
d1.innerHTML = ped[1];
r1.innerHTML = (ped[1]/t*100).toFixed(4);
d2.innerHTML = ped[2];
r2.innerHTML = (ped[2]/t*100).toFixed(4);
d3.innerHTML = ped[3];
r3.innerHTML = (ped[3]/t*100).toFixed(4);
d4.innerHTML = ped[4];
r4.innerHTML = (ped[4]/t*100).toFixed(4);
d5.innerHTML = ped[5];
r5.innerHTML = (ped[5]/t*100).toFixed(4);
d6.innerHTML = ped[6];
r6.innerHTML = (ped[6]/t*100).toFixed(4);
d7.innerHTML = ped[7];
r7.innerHTML = (ped[7]/t*100).toFixed(4);
d8.innerHTML = ped[8];
r8.innerHTML = (ped[8]/t*100).toFixed(4);
d9.innerHTML = ped[9];
r9.innerHTML = (ped[9]/t*100).toFixed(4);
d10.innerHTML = ped[10];
r10.innerHTML = (ped[10]/t*100).toFixed(4);
d11.innerHTML = ped[11];
r11.innerHTML = (ped[11]/t*100).toFixed(4);
d12.innerHTML = ped[12];
r12.innerHTML = (ped[12]/t*100).toFixed(4);
d13.innerHTML = ped[13];
r13.innerHTML = (ped[13]/t*100).toFixed(4);
}
