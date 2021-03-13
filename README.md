## Liner 실무 과제

### DB 설계

![image](https://user-images.githubusercontent.com/48484252/111036180-55234100-8461-11eb-82ff-f57ef7939cea.png)

DB 설계는 하이라이트의 정보를 저장하는 `Hightlights` 테이블과 페이지의 정보를 저장하는 `Pages` 테이블로 총 두 개의 테이블을 만들었습니다.

한 페이지 안에 여러 개의 하이라이트가 있을 수 있으니 `1:N` 관계의 테이블이 필요하다고 판단했습니다.
만일 Hightlights 테이블만 존재할 경우 동일한 페이지 내에서 여러 개의 하이라이트가 생성된다면 메모리 낭비가 생길 것이라 판단되어 최소 두 개의 테이블이 존재해야 한다고 생각했습니다.

Pages 테이블과 Highlights 테이블 두 개를 생성하여 Pages테이블의 아이디를 Highlights 테이블이 참조하도록 설계하였고 이를 통해 Highlights 테이블에서 Pages 테이블에 접근이 가능하도록 설계했습니다.

---
### API 문서

 #### 1. 하이라이트 저장
 - URL: /highlight/create 
 - Method: post 
 - Data Params
   -  object:
       ```
       { 
           "userId": 12312, 
           "pageUrl": "www.getliner.com", 
           "colorHex": "#fffff8", 
           "text": "라이너 사전과제 입니다." 
        }
        ``` 
            
  - Success Response: 
    - code:200
      ```
       {
           "highlightId": 1,  
           "userId": 12312,
           "pageId": 123,
           "colorHex": "#fffff8",
           "text": "라이너 사전과제 입니다."
       }    
      ```
          
   - Error Response
     - code:500 
       ```
       { 
           "isSuccess": false
       }
       ```
  
   #### 2. 하이라이트 수정
 - URL: /highlight/update 
 - Method: patch 
 - Data Params
   -  object:
       ```
       { 
           "highlightId": 1,
           "userId": 12312,
           "colorHex": "#fffff8",
           "text": "변경된 텍스트입니다"
        }
        ``` 
            
  - Success Response: 
    - code:200
      ```
       {
           "highlightId": 1,  
           "userId": 12312,
           "pageId": 123,
           "colorHex": "#fffff8",
           "text": "변경된 텍스트입니다"
       }    
      ```
          
   - Error Response
     - code:500 
       ```
       { 
           "isSuccess": false
       }
       ```
 
 #### 3. 페이지 내 하이라이트 정보 가져오기
 - URL: /highlight/read/page 
 - Method: post 
 - Data Params
   -  object:
       ```
       { 
           "userId": 12312,
           "pageUrl": "www.getliner.com"
        }
        ``` 
            
  - Success Response: 
    - code:200
      ```
       [
         {
            "highlightId": 1,  
            "userId": 12312,
            "pageId": 123,
            "colorHex": "#fffff8",
             "text": "라이너 사전과제 입니다."
         }
         ...
       ]
      ```
          
   - Error Response
     - code:500 
       ```
       { 
           "isSuccess": false
       }
       ```
       
  #### 4. 유저가 하이라이트한 정보와 페이지 가져오기
 - URL: /highlight/read/user 
 - Method: post 
 - Data Params
   -  object:
       ```
       { 
           "userId": 12312
        }
        ``` 
            
  - Success Response: 
    - code:200
      ```
       [
         {
            "pageId": 123,
            "pageUrl": "www.getliner.com"
            "highlights": [
              {
                 "highlightId": 123,  
                 "userId": 12312,
                 "pageId": 123,
                 "colorHex": "#fffff8",
                 "text": "라이너 사전과제 입니다."
              },
              ...
            ]
          },
         ...
       ]
      ```
          
   - Error Response
     - code:500 
       ```
       { 
           "isSuccess": false
       }
       ```
       
  #### 5. 하이라이트 삭제
 - URL: /highlight/delete 
 - Method: delete
 - Data Params
   -  object:
       ```
       { 
           "userId": 12312,
           "highlightId": 12312
        }
        ``` 
            
  - Success Response: 
    - code:200
      
          
  - Error Response
     - code:500 
       ```
       { 
           "isSuccess": false
       }
       ```
       
  #### 6. 유저의 하이라이트 테마 변경
 - URL: /highlight/update/theme 
 - Method: patch
 - Data Params
   -  object:
       ```
       { 
           "userId": 12312,
           "themeId": 2
        }
        ``` 
            
  - Success Response: 
    - code:200
      
          
  - Error Response
     - code:500 
       ```
       { 
           "isSuccess": false
       }
       ```
       
