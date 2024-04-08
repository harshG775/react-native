import { View, Text, ScrollView, Image, TextInput, Button } from "react-native";
import React, { useState } from "react";

type NoteProps = {
    title: string;
    note: string;
    id: number;
    handleDeleteNote: (id: number) => void;
};
function Note(props:NoteProps) {
    const { title, note, id } = props;
    return (
        <View className="border border-blue-500 bg-blue-600 p-2 w-full mt-2 rounded-md">
            <View>
            <Text className="text-xl">{title}</Text>
            <Text className="text-sm">{note}</Text>
            </View>
            <Text onPress={() => props.handleDeleteNote(id)} className="text-red-500 font-bold text-2xl absolute right-2 top-2">X</Text>
        </View>
    );
}

const noteData = [
    {
        id: 1,
        title: "Note 1",
        note: "this my note",
    },
    {
        id: 2,
        title: "Note 2",
        note: "this my note",
    },
    // {
    //     id: 3,
    //     title: "Note 3",
    //     note: "this my note",
    // },
    // {
    //     id: 4,
    //     title: "Note 4",
    //     note: "this my note",
    // },
    // {
    //     id: 5,
    //     title: "Note 5",
    //     note: "this my note",
    // },
    // {
    //     id: 6,
    //     title: "Note 6",
    //     note: "this my note",
    // },
    // {
    //     id: 7,
    //     title: "Note 7",
    //     note: "this my note",
    // },
    // {
    //     id: 8,
    //     title: "Note 8",
    //     note: "this my note",
    // },
    // {
    //     id: 9,
    //     title: "Note 9",
    //     note: "this my note",
    // },
    // {
    //     id: 10,
    //     title: "Note 10",
    //     note: "this my note",
    // },
    // {
    //     id: 11,
    //     title: "Note 11",
    //     note: "this my note",
    // },
    // {
    //     id: 12,
    //     title: "Note 12",
    //     note: "this my note",
    // },
];
export default function Home() {
    const [notes, setNotes] = useState(noteData);
    const [noteInput, setNoteInput] = useState("");
    const handleAddNote = () => {
        if (noteInput) {
            const newNote = {
                id: notes.length + 1,
                title: noteInput,
                note: noteInput,
            };
            setNotes([...notes, newNote]);
            setNoteInput("");
        }
    }
    const handleDeleteNote = (id: number) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View className=" w-full bg-blue-500 p-1 h-12 flex-row items-center justify-between">
                <TextInput
                    placeholder="Add Notes"
                    value={noteInput}
                    onChangeText={setNoteInput}
                    className="bg-blue-700 w-full rounded-md h-10 px-2 text-white"
                    onSubmitEditing={handleAddNote}
                />
                {/* <Button title="Add Note" onPress={handleAddNote} /> */}
            </View>
            <Text className="text-3xl font-bold">Notes</Text>
            <View className="p-2">
                {notes.map((note) => (
                    <Note key={note.id} title={note.title} note={note.note} id={note.id} handleDeleteNote={handleDeleteNote}/>
                ))}
            </View>
        </ScrollView>
    );
}
