import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CircleArrowUp } from "lucide-react";
import Container from "../ui/container";

interface InputAreaProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  isStreaming: boolean;
  handleSend: () => void;
}

const InputArea: React.FC<InputAreaProps> = ({
  input,
  setInput,
  isStreaming,
  handleSend,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 w-full h-full border rounded-lg">
        <Textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Write details about the job... (Shift + Enter for a new line)"
          className="flex-grow resize-none mr-2 border-none"
        />
        <Button
          onClick={handleSend}
          className="whitespace-nowrap h-full"
          disabled={isStreaming || !input.trim()}
        >
          {isStreaming ? "Thinking..." : <CircleArrowUp />}
        </Button>
      </div>
    </Container>
  );
};

export default InputArea;
