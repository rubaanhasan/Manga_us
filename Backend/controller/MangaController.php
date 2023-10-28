<!-- <?php

//class MangaController extends Controller
// {
//     public function index()
//     {
//         $mangas = Manga::all();

//         return view('mangas.index', ['mangas' => $mangas]);
//     }

//     public function show($id)
//     {
//         $manga = Manga::find($id);

//         if (!$manga) {
    //         abort(404);
    //     }

    //     return view('mangas.show', ['manga' => $manga]);
    // }

    // public function create()
    // {
    //     return view('mangas.create');
    // }

    // public function store(Request $request)
    // {
    //     $validatedData = $request->validate([
    //         'title' => 'required|string|max:255',
    //         'author' => 'required|string|max:255',
    //         'artist' => 'required|string|max:255',
    //         'category' => 'required|string|max:255',
    //     ]);

    //     $manga = Manga::create($validatedData);

    //     return redirect()->route('mangas.show', $manga->id);
    // }

//     public function edit($id)
//     {
//         $manga = Manga::find($id);

//         if (!$manga) {
//             abort(404);
//         }

//         return view('mangas.edit', ['manga' => $manga]);
//     }

//     public function update(Request $request, $id)
//     {
//         $validatedData = $request->validate([
//             'title' => 'required|string|max:255',
//             'author' => 'required|string|max:255',
//             'artist' => 'required|string|max:255',
//             'category' => 'required|string|max:255',
//         ]);

//         $manga = Manga::find($id);

//         $manga->update($validatedData);

//         return redirect()->route('mangas.show', $manga->id);
//     }

//     public function destroy($id)
//     {
//         $manga = Manga::find($id);

//         if (!$manga) {
//             abort(404);
//         }

//         $manga->delete();

//         return redirect()->route('mangas.index');
//     }
// } 
