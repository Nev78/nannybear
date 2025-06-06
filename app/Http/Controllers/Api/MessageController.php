<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    /**
     * Отримати всі повідомлення конкретного чату
     */
    public function index($chat_id)
    {
        return response()->json(Message::where('chat_id', $chat_id)->with('sender')->get());
    }

    /**
     * Надіслати нове повідомлення
     */
    public function store(Request $request)
    {
        $request->validate([
            'chat_id' => 'required|exists:chats,id',
            'message' => 'required|string',
        ]);

        $message = Message::create([
            'chat_id' => $request->chat_id,
            'sender_id' => Auth::id(),
            'message' => $request->message,
        ]);

        return response()->json($message, 201);
    }
}
