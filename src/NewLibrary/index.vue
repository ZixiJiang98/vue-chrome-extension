<template>
  <div class="library-container mx-auto">
    <h1 class="mb-4">New Library</h1>
    <div class="w-full grid grid-cols-6 gap-3">
      <Button
        v-for="(buttonProps, index) in buttonCombinations"
        :key="index"
        :type="buttonProps.type"
        :color-type="buttonProps.colorType"
        class="justify-self-start"
      >
        Test Button
      </Button>
        <Button
          type="normal"
          color-type="dark-blue"
          prefix="NewLibrary/example_light.svg"
          class="w-4/5"
        >
          Test Prefix
        </Button>
        <Button
          type="round"
          color-type="dark-blue-stroke"
          suffix="NewLibrary/example_dark.svg"
          class="w-4/5"
        >
          Test Suffix
        </Button>
        <Button
          type="normal"
          color-type="dark-blue"
          prefix="NewLibrary/example_light.svg"
          class="justify-self-start"
          :loading="loading"
          @click="handleClick"
        >
          Loading
        </Button>
        <Button
          type="round"
          color-type="dark-blue-stroke"
          suffix="NewLibrary/example_dark_big.svg"
          class="justify-self-start"
          :loading="loading"
          @click="handleClick"
        >
          Loading
        </Button>
        <Button
          type="normal"
          color-type="sky-blue"
          class="w-3/4"
          :loading="loading"
          @click="handleClick"
          @handleClick="handleClick"
        >
          Loading
        </Button>
        <Button
          v-for="(buttonProps, index) in buttonCombinations"
          :key="index"
          :type="buttonProps.type"
          :color-type="buttonProps.colorType"
          :disabled="true"
          class="justify-self-start"
        >
          Test Button
        </Button>
        <Button
          color-type="none-stroke"
          :large-font="true"
          class="justify-self-start"
        >
          <span>Test Font</span>
        </Button>
    </div>
    <div class="mt-4">
      <div class="w-1/2">
        <Alert>
          <span class="flex items-center">
            There's no upcoming send out.
            <Button
              color-type="none-stroke"
              class="justify-self-start"
            >
              <span>Contact Support</span>
            </Button>
          </span>
        </Alert>
      </div>
      <div class="w-1/2 mt-4">
        <Alert type="info">
          <span>
            This is a long message. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel leo auctor, sollicitudin sapien at, tincidunt erat. Integer gravida, odio nec pulvinar fringilla, nisi sapien dignissim urna, at varius elit nunc sit amet felis. Praesent ultricies feugiat nisl, non tempus nulla tincidunt non. Nulla facilisi. Vivamus blandit, sapien vel dapibus tincidunt, lacus ligula fringilla nisi, et malesuada est risus sit amet purus. Sed suscipit ligula vel lectus placerat gravida. Cras tincidunt justo vel arcu viverra, sit amet dictum eros suscipit. Proin vehicula nibh in massa laoreet, eget tincidunt justo porta. Suspendisse potenti. Ut nec dictum sapien. Duis venenatis, ligula sit amet vulputate pellentesque, sem neque posuere purus, id gravida mi sapien at ex. Maecenas eget nisi id metus cursus venenatis
          </span>
        </Alert>
      </div>
      <div class="w-2/3 mt-4">
        <Alert type="error">
          <span class="flex items-center">
            This is an error message with icon
            <Button
              color-type="none-stroke"
              class="justify-self-start"
            >
              <span>Contact Support</span>
            </Button>
            This is an error message with icon
          </span>
        </Alert>
      </div>
    </div>
    <div class="mt-4 flex flex-col gap-2 mb-4">
      <div class="flex justify-start items-center gap-1">
        <Checkbox :status="allStatus" :isAll="true" @changeStatus="changeAllStatus"/>
        <span>All Items</span>
      </div>

      <div class="flex justify-start items-center gap-1" v-for="(item, index) in checkList" :key="index">
        <Checkbox 
          :status="item.status" 
          :color-type="item.colorType"
          @changeStatus="(newStatus) => item.status = newStatus" 
        />
        <span>{{ item.value }}</span>
      </div>
      <div class="flex justify-start items-center gap-1">
        <Checkbox :status="allStatus" :width="32" :isAll="true" @changeStatus="changeAllStatus"/>
        <span>All Items</span>
      </div>
      <div class="flex justify-start items-center gap-1" v-for="(item, index) in checkList" :key="index">
        <Checkbox 
          :status="item.status" 
          :color-type="item.colorType"
          :width="32"
          @changeStatus="(newStatus) => item.status = newStatus" 
        />
        <span>{{ item.value }}</span> 
      </div>
      <div class="flex justify-start items-center gap-1">
        <Checkbox :status="allStatus" :width="18" :isAll="true" @changeStatus="changeAllStatus"/>
        <span>All Items</span>
      </div>
      <div class="flex justify-start items-center gap-1" v-for="(item, index) in checkList" :key="index">
        <Checkbox 
          :status="item.status" 
          :color-type="item.colorType"
          :width="18"
          @changeStatus="(newStatus) => item.status = newStatus" 
        />
        <span>{{ item.value }}</span> 
      </div>
      <div class="flex justify-start items-center gap-1">
        <Checkbox 
          :status="allStatus" 
          :width="24" 
          color-type="red" 
          hover-color-type="dark-blue"  
          :isAll="true" 
          @changeStatus="changeAllStatus"
        />
        <span>All Items</span>
      </div>
      <div class="py-10">
        <BreadCrumb :urlList="urlList"/>
      </div>
      <div class="py-10 w-1/2 flex flex-col gap-4">
        <BaseInput2 
          :validate-func="validateFunc" 
          :clearable="false"
          prefix="NewLibrary/example_dark.svg"
          isRequiredText="Required"
          InputTitle="Required Information"
        />
        <BaseInput2 
          :validate-func="validateFunc" 
          :clearable="true"
          prefix="NewLibrary/example_dark.svg"
          isRequiredText="Required"
          InputTitle="Required Information"
        />
        <BaseInput2 
          :validate-func="validateFunc" 
          :clearable="false"
          :inactive="true"
          :inactiveText="'This is inactive text styling'"
          prefix="NewLibrary/example_dark.svg"
          isRequiredText="Required"
          InputTitle="Required Information"
        />
        <p>Input</p>
        <Input
          v-model="username"
          :validate-func="validateFunc" 
          :inactive="false"
          placeholder="Enter name"
        />
      </div>
      <div class="flex flex-col gap-4">
        <TextArea 
          :inactive="false"
          prefix="NewLibrary/example_dark.svg"
          isRequiredText="Required"
          InputTitle="Required Information"
          :draggable="false"
        />
        <TextArea 
          :inactive="false"
          prefix="NewLibrary/example_dark.svg"
          isRequiredText="Required"
          InputTitle="Required Information"
          :draggable="true"
        />
        <TextArea 
          :inactive="true" 
          :inactiveText="'This is inactive text Styling'"
          prefix="NewLibrary/example_dark.svg"
          isRequiredText="Required"
          InputTitle="Required Information"
        />
        <p>Single Selector</p>
        <SingleSelector 
          class="w-1/2"
          label-prefix="NewLibrary/example_dark.svg"
          prefix="NewLibrary/example_dark.svg"
          isRequiredText="Required"
          InputTitle="Required Information"
          value-field="desc"
          defaultOption="b"
          :has-label="true"
          :options="singleSelectorList"
          @change="handleSelectedOptionClick"
        />
        <DialogTitleBar :withPrefix="true"/>
        <DialogTitleBar :withPrefix="false"/>
      </div>
    </div>
    <div class="mb-4 w-1/3">
      <BaseInput2 
        isRequiredText="Required"
        InputTitle="Required Information"/>
    </div>
    <div class="mb-4 w-1/3">
      <BaseInput2 
        :validate-func="validateFunc" 
        :searchable="true"
        prefix="NewLibrary/example_dark.svg"
        isRequiredText="Required"
        InputTitle="Required Information"
        />
    </div>
    <div class="mb-24 w-1/2">
      <InputWithDropdown
        dropdown-width="w-1/4"
        prefix="NewLibrary/example_dark.svg"
        suffix="NewLibrary/input/search.svg"
        :options="optionList"
        dropdown-placeholder="Default"
        input-placeholder="Input Placeholder"
        @search="searchWithDropdown"
      />
    </div>
    <Checkbox 
      :status="'checked'" 
      :disabled="true"
    />
    <div class="mb-24 w-1/2 flex flex-col gap-4">
      <p>Parent Handle List</p>
      <ComboBox
        placeholder="Search Patient By Name..."
        :combo-list="sortedComboList"
        :have-quantity="true"
        :isFloating="false"
        :chips-clearable="true"
        :has-action="true"
        chips-color-type="cyan"
        :needs-message="true"
        :message="message"
        @updateInput="updateComboInput"
        @changeStatus="changeComboItemStatus"
      >
        <template #suffix>
          <img src="@/assets/NewLibrary/input/search.svg" class="object-contain"/>
        </template>
      </ComboBox>
      <p>Child Handle List</p>
      <ComboBox
        ref="comboBox2"
        :combo-list="comboList2"
        :use-local-list="true"
        :update-func="comboListUpdate"
        :has-action="true"
        :chips-clearable="true"
        chips-prefix="NewLibrary/example_dark_big.svg"
        action-field-name="actions"
        :needs-message="true"
        @updateInput="updateComboInput"
        @changeStatus="changeComboItemStatus"
      >
        <template #suffix>
          <img src="@/assets/NewLibrary/input/search.svg" class="object-contain"/>
        </template>
      </ComboBox>
      <div class="cursor-pointer" @click="getSelectedList" >click me to see the selected list</div>
      <!-- <p>Child Handle List, Single Selection, no result when empty input</p> -->
      <!-- <ComboBox
        :combo-list="comboList2"
        :use-local-list="true"
        :is-floating="true"
        :update-func="comboListUpdate"
        :is-single="true"
        :number-of-collapse="3"
        :maxHeightOfDropDown="150"
        chips-prefix="NewLibrary/example_red.svg"
        checkboxColorType="red"
        chips-color-type="red"
        :showListWhenEmptyInput="false"
        @updateInput="updateComboInput"
        @changeStatus="changeComboItemStatus"
      >
        <template #suffix>
          <img src="@/assets/NewLibrary/input/search.svg" class="object-contain"/>
        </template>
      </ComboBox> -->
      <p>Child Handle List, no wrap chips, no result when empty input</p>
      <ComboBox
        placeholder="Placeholder here..."
        :combo-list="comboList2"
        :use-local-list="true"
        :update-func="comboListUpdate"
        :has-action="true"
        :chips-clearable="true"
        :isFloating="false"
        :wrap-chips="false"
        :maxHeightOfDropDown="600"
        chips-prefix="NewLibrary/example_red.svg"
        checkboxColorType="red"
        chips-color-type="red"
        :showListWhenEmptyInput="false"
        :needs-message="false"
        action-field-name="actions"
        @updateInput="updateComboInput"
        @changeStatus="changeComboItemStatus"
      >
      </ComboBox>
      <p>Rectangle Chips</p>
      <ComboBox
        ref="comboBox2"
        :combo-list="comboList2"
        :use-local-list="true"
        :update-func="comboListUpdate"
        :has-action="true"
        :chips-clearable="true"
        action-field-name="actions"
        :needs-message="true"
        :is-rectangle="true"
        @updateInput="updateComboInput"
        @changeStatus="changeComboItemStatus"
      >
      </ComboBox>
    </div>
    <div class="mb-8">
      <InputLabel 
        :inactive="false"
        isRequiredText="Required"
        InputTitle="Normal Label"
      />
      <BaseInput 
        v-model="baseInputValue"
        placeholder="Placeholder"
        class="w-1/3"
        :clearable="true"
      />      
    </div>
    <div class="mb-8 w-1/2 flex gap-4">
      <InputLabel 
        class="w-1/4"
        :inactive="false"
        isRequiredText="Required"
        InputTitle="Vertical Label"
        :isVertical="true"
      />
      <BaseInput 
        v-model="baseInputValue"
        placeholder="Placeholder"
        class="w-full"
        :clearable="true"
      />     
    </div>
    <div class="mb-8">
      <InputLabel 
        :inactive="true"
        isRequiredText="Required"
        InputTitle="Normal Label"
      />
      <BaseInput 
        :inactive="true"
        v-model="baseInputValue"
        placeholder="Placeholder"
        class="w-1/3"
      />      
    </div>
    <div class="mb-16 w-1/2 flex gap-4">
      <InfoContainer :is-error="true">
        <InputLabel 
          :inactive="false"
          isRequiredText="Required"
          InputTitle="Normal Label"
        />
        <BaseInput 
          v-model="baseInputValue"
          placeholder="Placeholder"
          class="w-full"
          :clearable="true"
        />   
      </InfoContainer>   
    </div>
    <div class="mb-8" style="border: 1px solid red; width: 400px; height: 200px;">
      <Loading :loading="blockLoading1" loading-text="Please wait..." icon="Download" background="gradient-background">
        <div class="cursor-pointer flex justify-center items-center h-full" @click="triggerLoading(1)">
          click me to trigger loading
        </div>
      </Loading>
    </div>
    <div class="mb-8" style="border: 1px solid red; width: 400px; height: 200px;">
      <Loading :loading="blockLoading1" loading-text="Form preparing..." icon="Supplement" background="none-background">
        <div class="cursor-pointer flex justify-center items-center h-full" @click="triggerLoading(1)">
          click me to trigger loading
        </div>
      </Loading>
    </div>
    <div class="mb-8" style="border: 1px solid red; width: 800px; height: 400px;">
      <Loading :loading="blockLoading2" loading-text="Please wait..." icon="MerchBig" :is-big="true" background="gradient-background">
        <div class="cursor-pointer flex justify-center items-center h-full" @click="triggerLoading(2)">
          click me to trigger loading
        </div>
      </Loading>
    </div>
  </div>
</template>
  
<script>
import Button from "./Button.vue";
import Alert from "./Alert.vue";
import BreadCrumb from './BreadCrumb.vue'
import Checkbox from "./Checkbox.vue";
import InputWithDropdown from "./InputWithDropdown.vue";
// import BaseInput from "./BaseInput.vue";
import BaseInput2 from "./BaseInput2.vue";
import Input from "./Input.vue";
import TextField from './TextField.vue'
import TextArea from './TextArea.vue';
import SingleSelector from './SingleSelector.vue'
import InputLabel from './InputLabel.vue'
import ComboBox from "./ComboBox/ComboBox.vue";
import DialogTitleBar from './Dialog.vue'
import BaseInput from './BaseInput.vue'
import InfoContainer from './InfoContainer.vue'

import Loading from "./Loading/Loading.vue";
import { checkList, urlList, searchOptionList, singleSelectorList } from "./fakeData";

export default {
  props: {
  },
  components: {
    Button,
    Alert,
    Checkbox,
    BreadCrumb,
    InputWithDropdown,
    Input,
    BaseInput2,
    TextArea,
    SingleSelector,
    ComboBox,
    Loading,
    DialogTitleBar,
    BaseInput,
    InputLabel,
    InfoContainer,
  },
  data() {
    return {
      types: ["normal", "narrow", "round"],
      colorTypes: [
        "dark-blue",
        "sky-blue",
        "none-stroke",
        "dark-blue-stroke",
        "sky-blue-stroke",
        "red-stroke",
        "red",
      ],
      loading: false,
      checkList,
      urlList,
      optionList: searchOptionList,
      comboSorted: "",
      comboList: this.generateComboList(),
      comboList2: this.generateComboList2(),
      blockLoading1: false,
      blockLoading2: false,
      singleSelectorList,
      username: "",

      baseInputValue: "",
    };
  },
  computed: {
    buttonCombinations() {
      // Generate all combinations of type and colorType
      return this.types.flatMap((type) =>
        this.colorTypes.map((colorType) => ({ type, colorType }))
      );
    },
    allStatus() {
      const checkedCount = this.checkList.filter(item => item.status === 'checked').length;
      if (checkedCount === this.checkList.length) {
        return 'checked';
      } else if (checkedCount > 0) {
        return 'partial';
      } else {
        return 'uncheck';
      }
    },
    message() {
      if (!this.sortedComboList || !this.comboSorted.trim()) {
        return "";
      }
      let matchCount = 0;
      let checkedCount = 0;
      this.sortedComboList.forEach(item => {
        if (this.comboSorted && item.label.toLowerCase().includes(this.comboSorted) && item.checkboxStatus === "uncheck") {
          matchCount++;
        }
        if (item.checkboxStatus === "checked") {
          checkedCount++;
        }
      });
      return `${matchCount} option${matchCount > 1 ? 's' : ''} recommended, ${this.sortedComboList.length} option${this.sortedComboList.length > 1 ? 's' : ''} total`;
    },
    sortedComboList() {
      if (!this.comboSorted) {
        return this.comboList.slice().sort((a, b) => {
          if (a.checkboxStatus === "checked" && b.checkboxStatus !== "checked") return -1;
          if (b.checkboxStatus === "checked" && a.checkboxStatus !== "checked") return 1;
          return 0;
        });
      }

      return this.comboList.slice().sort((a, b) => {
        if (a.checkboxStatus === "checked" && b.checkboxStatus !== "checked") return -1;
        if (b.checkboxStatus === "checked" && a.checkboxStatus !== "checked") return 1;

        const aMatch = a.label.toLowerCase().includes(this.comboSorted) ? -1 : 1;
        const bMatch = b.label.toLowerCase().includes(this.comboSorted) ? -1 : 1;
        return aMatch - bMatch;
      });
    }
  },
  watch: {
  },
  methods: {
    handleClick() {
      this.loading = true; 
      setTimeout(() => {
        this.loading = false; 
      }, 3000); 
    },

    changeAllStatus() {
      if (this.allStatus === 'partial' || this.allStatus === 'uncheck') {
        this.checkList.forEach(item => {
          item.status = 'checked';
        });
      } else {
        this.checkList.forEach(item => {
          item.status = 'uncheck';
        });
      }
    },
    searchWithDropdown(params) {
      console.log(params)
    },

    validateFunc(value) {
      return value.length < 8
    },
    updateComboInput(value) {
      this.comboSorted = value.toLocaleLowerCase();
    },
    changeComboItemStatus(params) {
      this.comboList[params.index].checkboxStatus = params.status;
    },
    generateComboList() {
      const firstNames = ["John", "Jane", "Michael", "Emily", "David", "Sarah", "Daniel", "Laura"];
      const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Long Name Long Name Long Name Long Name Long Name Long Name Long Name Long Name Long Name Long Name Long Name Long Name Long Name Long Name", "Miller", "Davis"];

      return Array.from({ length: 40 }, (_, i) => {
        const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
        return {
          value: (i + 1).toString(), // Number as a string (1-100)
          label: `${randomFirst} ${randomLast}`, // Randomly generated name
          index: i,
          checkboxStatus: "uncheck",
          quantity: 1,
          disabledFunc: () => { return false },
        };
      });      
    },
    generateComboList2(disabledFunc = null) {
      // const firstNames = ["1", "2", "3", "4", "5", "6", "7", "8"];
      // const lastNames = ["A", "B", "C", "D", "E", "F", "G", "H"];
      const firstNames = ["John", "Jane", "Michael", "Emily", "David", "Sarah", "Daniel", "Laura"];
      const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Garcia", "Miller", "Davis"];

      return Array.from({ length: 40 }, (_, i) => {
        const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
        return {
          value: (i + 1).toString(), // Number as a string (1-100)
          label: `${randomFirst} ${randomLast}`, // Randomly generated name
          actions: ["Add", "Remove"],
          disabledFunc
        };
      });      
    },
    comboListUpdate(input, list, needsMessage = false) {
      let matchCount = 0;
      let checkedCount = 0;
      const newList = list.slice().sort((a, b) => {
        if (a.checkboxStatus === "checked" && b.checkboxStatus !== "checked") return -1;
        if (b.checkboxStatus === "checked" && a.checkboxStatus !== "checked") return 1;

        if (!input) return 0;

        const aMatch = a.label.toLowerCase().includes(input) ? -1 : 1;
        const bMatch = b.label.toLowerCase().includes(input) ? -1 : 1;
        return aMatch - bMatch;
      });
      newList.forEach(item => {
        if (input && item.label.toLowerCase().includes(input) && item.checkboxStatus === "uncheck") {
          matchCount++;
        }
        if (item.checkboxStatus === "checked") {
          checkedCount++;
        }
      });
      const res = { list: newList };
      if (needsMessage && input.length > 0) {
        res.message = `${matchCount} option${matchCount > 1 ? 's' : ''} recommended, ${list.length} option${list.length > 1 ? 's' : ''} total`;
      }
      return res
    },
    getSelectedList() {
      const list = this.$refs.comboBox2.submitSelectedList();
      console.log(list)
    },

    triggerLoading(val) {
      if (val == 1) {
        if (this.blockLoading1) {
          return;
        }
        this.blockLoading1 = true; 
        setTimeout(() => {
          this.blockLoading1 = false; 
        }, 5000); 
      } else {
        if (this.blockLoading2) {
          return;
        }
        this.blockLoading2 = true; 
        setTimeout(() => {
          this.blockLoading2 = false; 
        }, 5000);         
      }

    },
    handleSelectedOptionClick(selectedOption) {
      console.log(selectedOption,'selectedOption')
    }

  },
  mounted() {
    // Lifecycle hook
  },
};
</script>
  
<style scoped>
.library-container {
  width: 1400px;
}
</style>
