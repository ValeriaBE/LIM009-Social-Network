import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
    _collection_:{
        users:{
            _doc_:{
                abc1d:{
                    name: 'Lola',
                }
            }
        },
        posts:{
            _doc_:{
                weft10:{
                    uid: 'cftrix11',
                    name: 'Lola',
                    texto: 'hola',
                    state: 'publico',
                    likes: 0
                }
            }
        }
    }
}
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

// fxs a testear
import {
	viewPostdb,
	deletePost,
	updatePost,
	likePost,
	savePostdb,
} from "../src/controller/controller-firebase.js";


describe('savePostdb', ()=>{
    it('deberia guardar un post', (done)=>{
        savePostdb('qa123h', 'Maria Lopez', 'hola mundo', 'publico')
            .then(() => viewPostdb(
                (data) =>{
                    console.log(data)
                    const result = data.find((post)=> post.texto === 'hola mundo');
                    expect(result.texto).toBe('hola mundo');
                    done()
                }
            )
        )}
    )
});

describe('updatePost', ()=>{
    it('deberia actualizar un post', (done)=>{
        updatePost('weft10', 'hola people', 'privado')
            .then(() => {
                const data = (post) =>{
                    console.log(post)
                    const result = post.find((post)=> post.id=== 'weft10');
                    expect(result.texto).toBe('hola people');
                    done()
                }
            })     
                viewPostdb(data)
        })
    
});