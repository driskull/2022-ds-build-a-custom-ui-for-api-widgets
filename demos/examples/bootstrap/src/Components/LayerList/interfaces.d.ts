export type LayerListViewModelState = "loading" | "ready" | "disabled";

export type CallBackData =
  | __esri.ListItem
  | __esri.Collection<__esri.ListItem>
  | LayerListViewModelState
  | boolean;
