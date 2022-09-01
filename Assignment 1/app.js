let mobiles = {
    iphone:{
    v12 : {
        ram : 4 ,
        rom : 32,
        price : 536734,
    },
    v13 : {
        ram : 4 ,
        rom : 32,
        price : 536734,
    },
    v14 : {
        ram : 4 ,
        rom : 32,
        price : 536734,
    }
    },
   samsung:{
        a20 : {
        ram : 4 ,
        rom : 32,
        price : 536734,
        },
        a30 : {
            ram : 4 ,
            rom : 32,
            price : 536734,
        },
        vj6 : {
            ram : 4 ,
            rom : 32,
            price : 536734,
        }
        },
       techno:{
            camon15: {
            ram : 4 ,
            rom : 32,
            price : 536734,
            },
           camon16: {
                ram : 4 ,
                rom : 32,
                price : 536734,
            },
            camon17 : {
                ram : 4 ,
                rom : 32,
                price : 536734,
            }
     }

}

    let mobileName = document.getElementById("mobileName");
    let mobileModel = document.getElementById("mobileModel");
    let mobileCompanies = Object.keys(mobiles);
    mobileName.innerHTML = " <option>Select</option>";
    for(let i = 0 ;  i < mobileCompanies.length ; i++){
        mobileName.innerHTML += `<option value="${mobileCompanies[i]}">${mobileCompanies[i]}</option>`    
    }

function detail(){
    mobileModel.disabled = false;
    let mobileVersions = Object.keys(mobiles[mobileName.value]);
    mobileModel.innerHTML = " ";
    for(let i = 0 ;  i < mobileVersions.length ; i++){
        mobileModel.innerHTML += `<option value="${mobileVersions[i]}">${mobileVersions[i]}</option>`    
    }
    console.log(mobileVersions)
}
function search(){
    let mobileName = document.getElementById("mobileName").value;
    let mobileModel = document.getElementById("mobileModel").value;
    let data = mobiles[mobileName][mobileModel];
    console.log(data);
    let parent = document.getElementById("parent");
    parent.innerHTML = `<b class="fs-4">Detail:</b><br>Price:${data.price}</br>Ram:${data.ram}</br>Rom:${data.rom}`
}