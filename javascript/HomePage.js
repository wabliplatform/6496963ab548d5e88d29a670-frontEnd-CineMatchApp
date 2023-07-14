document.getElementById('immdi').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/AboutUsPage' ;}};document.getElementById('iiyel').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/BugReporting' ;}};window.onload = () => {
            
            const serviceData = JSON.parse(sessionStorage.getItem('serviceData'));
            const service = serviceData ? serviceData['https://api.themoviedb.org/3/trending/movie/day'] : null;
                
                const queryPar0 = (service && service.queryParams && service.queryParams['api_key'] !== undefined) ? service.queryParams['api_key'].replaceAll(',','%2C') : '70a0207fb286f95fb40238e3910d0f0e';
                
        
            fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${queryPar0}`,{
                method: "GET", 

                headers: {}

                
            })
            .then(response => 
                response.json().then(data => {
                    
            try{
                document.getElementById('iisa0s').textContent = data.results[0].title;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('iflhfd').textContent = data.results[1].title;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('izfo4h').textContent = data.results[2].title;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('ib5wg7').textContent = data.results[3].title;
            }
            catch(e){
                console.log(e);
            }

                })
            )
        
            
            const serviceData = JSON.parse(sessionStorage.getItem('serviceData'));
            const service = serviceData ? serviceData['https://shibe.online/api/shibes?count=2httpsUrls=true'] : null;
                
                
                
        
            fetch(`https://shibe.online/api/shibes?count=2httpsUrls=true?`,{
                method: "GET", 

                headers: {}

                
            })
            .then(response => 
                response.json().then(data => {
                    
            try{
                document.getElementById('i3v2rf').textContent = data.0;
            }
            catch(e){
                console.log(e);
            }

                })
            )
        };