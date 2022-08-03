import {MenuContentPage, DressesListPage} from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  const itemsNumber = 5;
  const dressesName: string[] = [
    "Printed Dress",
    "Printed Dress",
    "Printed Summer Dress",
    "Printed Summer Dress",
    "Printed Chiffon Dress",
  ];

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("show the available dresses", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressMenu();
    dressesListPage.getDressProducts();
    dressesListPage.validateItemsNumber(itemsNumber);
    dressesListPage.validateItemsNames(dressesName);
  });
});
