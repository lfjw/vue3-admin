import { isPassword } from "@/utils/validate";
import { Rules } from "async-validator";
import { reactive, } from "vue";
type ValidateCallback = (params?: Error) => void;

const validateUsername = (
  rule: Rules,
  value: string,
  callback: ValidateCallback
) => {
  if ("" == value) {
    callback(new Error("用户名不能为空"));
  } else {
    callback();
  }
};

const validatePassword = (
  rule: Rules,
  value: string,
  callback: ValidateCallback
) => {
  if (!isPassword(value)) {
    callback(new Error("密码不能少于6位"));
  } else {
    callback();
  }
};

const form = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  username: [
    {
      required: true,
      trigger: "blur",
      validator: validateUsername,
    },
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      validator: validatePassword,
    },
  ],
});


// function submitForm(formRefName: string) {

//   console.log(ruleForm.value);


// }
// function resetForm(formRefName: string) {
//   console.log(formRefName);


// }
export default function getForm() {
  return {
    form,
    rules,
    // submitForm,
    // resetForm
  }
}