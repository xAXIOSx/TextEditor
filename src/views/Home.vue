<template>
  <!--  <PopUp ref="popUp" text="Do you want to save your text?" :input="true" @saveConfirm="saveRecord">Please enter your project name</PopUp>-->
  <SaveList :saves="saves"></SaveList>
  <PopUp
    ref="popUp"
    :options="{ choice: true, input: true }"
    @popUpAnswer="newProject"
    >New project Name</PopUp
  >
  <vue-basic-alert :duration="300" :closeIn="6000" ref="alert" />
</template>

<script>
import { ref,computed } from "vue";
import SaveList from "@/components/home-components/SaveList";
import PopUp from "@/components/UI kit/PopUp";
import dateFunc from "@/modules/dateFunc";

export default {
  components: { SaveList, PopUp },
  setup() {
    let alert = ref(null);
    let saves = ref([
      {
        id: Date.now(),
        title: "First Project!",
        date: "Mar 22 2023 20:48",
        content: '<span>Hello <span style="color: red">lolaalal</span></span>'
      },
      {
        id: Date.now(),
        title: "Second Project!",
        date: "Mar 21 2023 20:33",
        content: '<span style="font-size: 64px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; f<span style="color: red;">sdsdfsdfs</span></span><div>fsdl<span style="font-family: Raleway;">;fdskl;fdskslfd;keewwwwws</span>fld; <span style="font-style: italic;">JDFKLJFKLDJKFLK </span>DFKL:FD</div><div><br></div><div>fssdopf<span style="text-decoration: underline;">[o03-9-20940-2424242423234</span></div>'
      },
      {
        title: "Create new Project",
        type: "new",
      },
    ]);

    if(!localStorage.getItem.saves){
      // записывается в localStorage "saves" просто строка roflanEbalo
      // завтра сделать связку в БД
      setSavesInData("saves",saves.value)
    }

    let getSavesFromData = computed(()=>{
      return localStorage.getItem('saves')
    })

    saves.value = getSavesFromData
    console.log(getSavesFromData);
    let newProject = (answer, inputValue) => {
      let { currentDate } = dateFunc();

      if (inputValue === "") {
        alert.value.showAlert("error", "Invalid input value.", "Error :(", {
          iconSize: 35,
          iconType: "solid",
          position: "top right",
        });
      } else if (answer === "ok") {
        saves.value.splice(-1, 0, {
          id: Date.now(),
          title: inputValue,
          date: currentDate,
          content: null
        });
        setSavesInData("saves",saves.value)
      }
    };
    function setSavesInData (data) {
      console.log('data');
      console.log(data);
      localStorage.setItem("saves",JSON.stringify(data))
    }

    return { alert, saves, newProject };
  },
};
</script>

<style lang="scss" scoped>
.save-list {
  user-select: none;
  max-width: 1702px;
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  row-gap: 30px;
  flex-wrap: wrap;
}
</style>
