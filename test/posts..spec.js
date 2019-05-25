import MockFirebase from 'mock-cloud-firestore';

beforeEach(() => {
    const fixtureData = {
        __collection__:{
            users:{
                __doc__:{
                    abc1d:{
                        name: 'Lola',
                    }
                }
            },
            posts:{
                __doc__:{
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
})

/*const addFakePost = (firestore) => firestore.doc('posts/weft10').set({
    uid: 'cftrix11',
name: 'Lola',
texto: 'hola',
state: 'publico',
likes: 0
})*/

// fxs a testear
import {
	viewPostdb,
	deletePost,
	updatePost,
	likePost,
	savePostdb,
} from "../src/controller/controller-firebase.js";


describe('savePostdb', () => {
    it('deberia guardar un post', (done)=>{
        savePostdb('qa123h', 'Maria Lopez', 'hola mundo', 'publico')
            .then(() => {
                const data = (post)=>{
                    console.log(data)
                    const result = post.find((post)=> post.texto === 'hola mundo');
                    expect(result.texto).toBe('hola mundo');
                    done()
                }
            
            viewPostdb(data)
            })
        })
});

describe('updatePost', ()=>{
  //  beforeEach(() => addFakePost(firebase.firestore()))
    it('deberia actualizar un post', (done)=>{
            updatePost('weft10', 'hola people', 'privado')
            .then(() => {
                const data = (post) =>{
                    console.log(post)
                    const result = post.find((post)=> post.id=== 'weft10');
                    expect(result.texto).toBe('hola people');
                    done()
                }
                viewPostdb(data);
            })           
        });
    })    

describe('deletePost')