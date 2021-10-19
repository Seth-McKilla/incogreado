import { ModelManager } from "@glazed/devtools";

// Hooks
import useCeramic from "../hooks/useCeramic";

async function bookReview() {
  const { loading, ceramic, errorMessage } = useCeramic();

  const manager = new ModelManager(ceramic);

  return <div>test</div>;
}

bookReview();
