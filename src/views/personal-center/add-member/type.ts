// type类型关系 interface数据结构

export type Picker = {
  text: string;
  value: string;
};
export interface ColumnsPopup {
  relationColumns: Picker[];
  genderColumns: Picker[];
}
export type InfoForm = {
  relation: string;
  gender: string;
  realName: string;
  iDNumber: string;
  orNumber: string;
  personId: string;
};

// export interface ConifrmItem {
//   selectedIndexes: [1];
//   selectedOptions: [{ text: "夫妻"; value: "couple" }];
//   selectedValues: ["couple"];
// }
export interface ConifrmItem {
  selectedIndexes: number[];
  selectedOptions: Picker[];
  selectedValues: string[];
}
