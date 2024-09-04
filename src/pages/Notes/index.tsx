import { Helmet } from "react-helmet-async";
import { NotebookPen } from "lucide-react";
import { Textarea } from "../../components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    // load the notes from local storage
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const handleSave = () => {
    // save the notes to local storage
    localStorage.setItem("notes", notes);
    alert("Notes saved successfully!");
  };
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Helmet>
        <title>2024 NLEC 巴拿巴生活營 Notes</title>
      </Helmet>
      <Alert className="hover:bg-zinc-100 dark:hover:bg-zinc-800">
        <NotebookPen className="h-4 w-4" />
        <AlertTitle>Looking to take some notes during the camp?</AlertTitle>
        <AlertDescription>
          You can start taking notes here! 📝 ️
        </AlertDescription>
      </Alert>
      <Textarea
        placeholder="Type your notes here..."
        className="w-full h-3/4"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <Button onClick={handleSave}>Save</Button>
    </main>
  );
}
