import { ModelManager } from "@glazed/devtools";
import ceramic from "..";
import bookReview from "";

(async () => {
  try {
    const manager = new ModelManager(ceramic);
    console.log(manager);
  } catch (error) {
    console.log(error);
  }
})();
