import React from "react";
import "./team.css"; // Import the CSS file

const teamMembers = [
  {
    id: 1,
    name: "Drisya Giri",
    image: "data:image/jpeg;base64,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",
    description: "Director",
  },
  {
    id: 2,
    name: "Saurab Katuwal",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDQ8PDw8PDg8ODhAODxAPDxAOFhEWFhURFhUYHiggGB0mGxUVITEhJSkrLi8uFx8zODMtNygtLisBCgoKDg0OGhAQFy0lHyUuLSstLS0vKy0wLS0tLS0tLSstLS0tKy0tLS0tLS0rLSstLi0rKystLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEBAAEFAQAAAAAAAAAAAAAAAQcCAwQFBgj/xABBEAACAQIDBAgDBgMFCQAAAAABAgADEQQSIQUGMUEHEyJRYXGBkTKhwRQjUnKx8EKCkkNi0eHxFTRTY2R0o7Kz/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAJxEBAQACAQQCAQMFAAAAAAAAAAECEQMSITFBBDIiUYGxFGFxkcH/2gAMAwEAAhEDEQA/AMzCWQTVCASxLCSIiAliICIiAibOKxKUkapVYIii7MxsAJjbeHpLYErglCqP7SoLs3kvL1gZOJA4yK4PAg+UwRi98MfiFKtUZkyktlAU28wB4zrtlbx16FQNhq1RG45Sbq3mDoZOh9FRPK7l74U8evVuBTxKjtJfRx+Jf8J6qQEREBERAREQEREBJLJASSyGAklkMCSSyQhJJYgahLIJYFiJYCIiErEkQLNFWoFUsxsqgkk8ABNc8P0pba6jDdShs9a+bwpjj7kge8DxO/O97YyoyoSMPTYrTUaZ2/Gf39Z1uwt33xTZ6txTB11+XjOp2LhGxeJSmgORTqTyHNplJsXhcKoQuqqvZsNbW77SueWu0duPCXvXGwuwaFEWp0xwsSdSZ0m392KbrmRcjr8JXSe1weIpVlzUnSoO9CDN2pQB4iZLcpdtsmNmtMPYDFVaFRWVilai2jDjcH9+8zxuvtpcdhkrCwf4aq/hqDj6Hj6zEO/WzxSxC1FFlqix/ML/AEJ9p23RZtQ0sSaDHsVha3IPxU/qPWasMurHbDy4dOVjL0sksu5EREBERAREQESRAREQJERA0yTVJCEkliSLLJLAsskSBYkiBYkiBZ8/dJW2mxGLqspuiv1a93VorAe7a+szPvdi2o4Ku1M2crkB5rc2JHkLzAPWBqtUMAWKdlSL311+keJtfGbunsOijAWw9Suw7VR9DzsB/nO+2vjMWhK4fC03p6fEwFyTr2QDNvo6I+yIunZLKbaAnMZ6qvST+K3rM+d3bWvCdpHldj4VFqq4o/Z6jEdYtPSmSQTw4edp2e8GMNOnZawoHQmowzW9JyqNSm1zTAsGtnOgvx0kxGCSr2amU3Gl7G/eLGcb/l3k/sx9vOofC9YdoHEtTZewURQNbHhrwM63ZeINOqrqe0jqw97g+89VvrurTGGetTRVqU6Zy5bgFb3y29zPB4avbI35b+U0cV3Ky801Y+kcFXFWnTqLwqIrj1F5vToNxsT1mAon8OdPQMbfIid/O0ZqsSRCCIiAiIgIiICIiAklkhCSSmSSJEskCyiaRLAsskQLJEkCxJeLwOm3wdVwWIZuAo1T69WwA9yJ88Y5jSrLWUZsjhst7Zl5r7Ae8zh0pYsU9nVBe2d6a+faDEewMwaa2ZVzc1B/f7+kmRMumRejfay16FVlXIRXfs3uQDr9Z6DauKyqDUzmmSAciljqbC9uX+MxlubtIYTEWY2pVyAx5B+Tesy7SyuvAEEWPcRMPNh+WvT0ODP8d+3BagDY9TXHAhurOl+B08xNuuyWYJVIq9llVyVuy8LA/ScxOvpN9y7BeSkmw9OElXDdY61cSRUemD1eYCyXtcjx0E459LVj2dfvLtlRs6rUqaWok2PG+XhMSbFBqU1B/Dr7azu+lPb6tlwVE8LNWI4AD4U8+B9BPK7FxdkC81Yg/kbX9bzV8eWYbvtg+RlLnqembuiXaJNKrhX4o3WIfDQMPkPeZDmFuj/aHV4xCWsGemDbg2c9Vb3qA+kzQJ3jLl5WJJZKpERAREQkiJIFiJIQREQJERJEiIgaRNU0ywLEkXgWJIvARJBgY46WS1UUqKjs0h9pq+pFNB75ph3aCZVIT+Fsy/lPL9faZa6RMbejiyLAvjaeHXvNKhRzMfSo7CYrxo+6zNxIFu8m9wJMq2uzRhKucW7zxPJuI957jc3epgOpqAtk7JF7svl3ieBwAy03LaFiAvf5/qfSaKGLaliC9NrOjDy4ag944ymXF19nTDl6O9Z4obbpNocwPcVN5xNqbRLhhTuAFJLEW9gZ02wtrU8ZSDKMtRLB1/CT3HmDY+017aZlw9dk1YU2IHMm2k8vPr6uizu9TDouPVL2Ycx1TrK9dzreo5F+fasJMO5RvBgQfKbuDw4erTXXtWD+dzf9Jt4vWswUaBiq25WnqydtPIvnb1m5eNP2qhTJuXqIinxLDKfMNlPpPpIT556LNjU8Ti6QzkVKNYVnQgDLRRb5gT8RL5RYWsLk8gfoaNaRasREKkREBERAREQERJJFiSICIkMBERA0CWaRLJQsSRAsSQYCddtzbOHwdM1MQ4XQ5Fuc7t3KBqZy6tEMPicfldl/QzEXSfh+qxAZi7M5PVGpUdylJUS4Fz+Jn+fdJxx6rotkm66febbdPEVLU+sWmt7B2JZnJJZyL2UsdbCeerWPAt7zaaTUcJrx48Z6Z8uTK+3CxKONVNz43JHlOG9IizDj3/SdwTfjx/WcetQ0NvaT0Y+kXPL27fcveM4V2Womeg7L16iwqKR8NSm34hc6HQ8DyIyDjK1N8lSi4q4evTJpuoNmZdShB1VhzU6iYZWo1JrjVT8Q/fOel2Btt8OSV+8oVCrVaV7AsvwuPwuO/mNDoZk5/jTPvPtGv4/ybh2v1dzvpuycJiVxNNT1NVlII+EEi1v0/fHwraVCTp2jfvBvoZluvvCtbCU6LOnUhAn3i56VVLWCVGClqTDTUcCLmYu2hQu7DRag5BldWHIhhowPIjSc5dr3Gx2Gz61Sm6VaJNOvSIdHQ6gjmO/n6GZ83L3lG0KOZlC1UCioBYLe3FRe9p86bNxRDC5syka81Pf7zLPQ/iA9fEhlyuqKeOlidRbz+sm30rr2yrERCpERASyRAREQEREBERASRECREQNuWaZZKFiSIFi8kQLMN9LtRjj0XkuGp5fC7vf5zMRmLemHC2rYWsB8dJ6RPijZh/8AQ+068P2c+X6saMJtE+om+5my3qJrZ2g+E0tUK6nyPl3ysbcwe/S80PZlIBB01ANyJSrxqr4cMLj/AFnBpMaLd9NuPh4zmbPrZktzGntNyrSDX048RHlHh2Gzcb1d1axpVB2hy8G/fKcbamz2BYiwZLm2lyL9/Pv9T3zhYe6Hq2+FvgPcfwz2WwNnLj6S0i+WtQK0muAc2Hbs0nH5GIQ+DJ3TNzYa/Kfu1cOe50X9nisDVzOCQQ40vpbjpeep3Z3gfAYlKyBRmbJUzsQjU+FmP8I4a8rAzzyhkd0yk1EZka3EEEgjXxE3upYkZygHCzMxJv32E42fq6x9NbK2jTxNIVaV7HRlbRkccVYd/wDkRoZy5hnoy3gXB1GpYioVwzIEDuDZWBGS/cBdhfkDyAFsygyVKsskQhYkiAiIgWJIgJZIgJJZICSWSBt3gSRLKtUSRISREkCzw3S5QLYKk4/s8St/Jqbj9bT3E89v/h+s2ZigOKolXyCVFZj/AEhpfC6yimc3jWB2E47se6cmoJx2vNtZo2rX4gTVlHn85CT4Shf2JXS0rh4c5KrryJuPUaznhps4hCR2bkggjh36/K8iva9+I0PnK+FvLkPTDgg/6eM7jc/axwuKo1anwq4o4juai+hb00bzWdLRfnN1uKnv7DfT56fzRe5Ozl71IExuKQHq2GIqM3K7M2bj68J1lOrV/jIYctAP0nL2jiOvrPUfVmp0A5P8TJRWmW9cl/WbNHTQTPlx2tE5I3XrEX5DJa3LNofraZH3C6QeryYXHtekAqUqx40gBYK/evjxHlw8Ph93zX+z1M5Iq1mpGkBqFCntA/mAB853W3d16anE1sKy0qOFw4Z7lnV8QuYuoJOmmQc+1fSRjcJ+FWy4s7OuM7IwIBUgggEEG4IPAg85ZhHcLfp8GepxGerhToFFi9JvxJfkea38fPLewNuUMdR67DFioYoyuMro4sbEa8iDIzwuKmOcrs5ZIlFliSIFiSICWSICSIgIkvEIbUSSyyFiSWQERJAsjAEEEAgixB1BHdEsJYE312L9ixlSkARSa1Whf/hNew9CCv8ALPNuJmvpR2H9own2hB97hAXP96gbZx6aN6HvmFnE24ZdWLLnjqtqb+Bpo9WmlWoKSM4V6hGYUwf4iO6bE3cHg6teoKdBGqVDchVsNOZJOgHiZOXgwm69sejnOt8PjadS+out1Yeak2nlt691sXgir1UDIxytUpXZA3LMbaX8Z7Pd7o/qU2FTEYpqRHathiafmDU4keQE9rhhSdWpistZLFGDstUMOBU3veebl8jLHLzt6n9PjnPrqvn6m9tBym/iXtTJ7u3/AE9r6TJG1+jnCuWbDVuobWyfHRv5HUeh07p4DauzqtBzRxCFGysNdVZbWzKeBE1cfLjn4ZOTiyw8tprXuO75cR9ZoVtTOLSxIFNbnULlPmNJsda76IPM8p1jhbp7vdPaBVWqWuaK9TS5/eVGzZvmP6Zztt7w0qNL7LTprWzKQwbVMx4vU/Ebk2Hr3TxOBr16VLIhAOfOW1vfLYafWaKd762J53JNz6zjjwfl1ZNN+RrGY4tzD0ioHh4meq3L3rqbOqsSnWUquUVUBytodGXlmFza+hvY24jzNN+Xwnx4Tl0xfz5d075as0zTs+jsFikrU6dakc1Oqi1EPC6sLjTlN+dJuamXZ2CH/TUz7i9vnO6mO+WiVYkiQklkiBZIiEEkSSRYkvEDZlmkSyVWqJIvCViIkBERA2sVhkrU3o1VDU6qmm6nmrCxE+bsWgDuFuVDMoLWuQDoTbvn0tMA9IGAOH2liKaKVplxVQcitRQxt4Ziw9PCd+G+Y5ckecac7Ye1K+Frq+GdFepaketANKzMPj7gDY35WnBY+s2zO1m5pTDK43cZRrbtNXIqbY2galzpRpsKdIr3BRqfMAGdvs6hgMOQuCwlUkAsCuHdQxH/ADKgF/O8w7s/GVMPWSvQbJVp3ytYEWIsVIPEEcp6Gp0hbTNstSgp7+pB+V5h5ODO9pf+PSw+TxebNX/bLVGo1QXXDilfiCQSPDSbO1NiU8VTKYimrqeHeptxUjUHxExI2/W1OsW2KJGRnZTTpqnEWvlAPfznsd1OkZa1kxirRZgDTcuOrcG2hLWynwMz5cOeHf8Ah0x5sM+38uvqdFmHVyetrlCSQPuyV8LW7XuJw9ubi1cLS6+iwxGHHxFUKVaf5kuRbxBmUWxilM5KhLXLEjLbznU4jeChRqAVKiihUVqdYEgZb/DUt4a+hMvxfLyl1fDny/Fxs3JqsOgCaWQGdtvJs04bFVaVsoDZkHLIeFvDjOtAvPS287TSiaa62nabF2ZWxFVaWHUuz8BwAHNieQHMzm7ubs4jHMBRS1MGz1nBFNB58z4DX9ZmTd7d7D4CnkordyLVKrAdY/ryHgNP1nPLPS8x25myMH9nw9ChfN1VGnTLciVUAn3nLiJmdSIiBYkiSLJEkBBiSAiS8QNmWaby3llWqWaRLeQLLNN5bwlYkiBZjDptw7BMHWRLjNVoOw43IDop9FqH3mTpiDpT2+1TEnCq33OGygrpZq5W5Y+QbKO7td86cU3kpyXUY0X7sEsOJBtz85uhgRcG4PAzbxnbv4zRh2sMmlwbjy5id3FvGS0l4hZoUanvY6n+7awE5FEWAXkFAHoJoWaxKbX0uLdmpFM75QQypnYoGB0OW9p6bdLfQ4Yth8cKuJwzWWmbq7YfU3sG1ZdRpm0toJ5kCVE7R8vnK2RaWu73l23TxeMpvh0cUqVFcPmcFTUsxZSFJJAGbLr8uE73cjdn/aFUo9QJRw1mq5bdYwqO7BVFtODan6zpNi7r4zFDNhsPUdL26zRKd/BmsD6TLvR9uu+z6VRq5U165XOEYsqU1vlW/M3ZifMDlIt1ESbr02DwtOjTSlRRUpoMqKugA/fOb0ks4uhLJECxJECxJEBJEkBBkvJAsTTEDZlmgGaryyjUDLeabxeBrvLNF5bwlqlmmWQI7hQWYgKoLMTwCgXJnzftnFGtiK9Y3+9rVKuvHtMSB85lnpQ24KWHGEptapXsaoHFcOL6fzEAeQaYdxjd3zmnix1NuHJlu6cWoZxKq63HEcJyHJ7vYzaJ8DLZGLR1zdwk61u6av3wMC37BnPV/V07NGcma1zShZugSOlO0R2nYYTjrrYXnEUWnOwfLylpFcqz3uJsqvg8BRw2IqLVNNqnV1ELHNRdy6XzC4PatbXhxnoJwtiVM2Fwzfiw1E/+NZzJmvl2ixEQEskQLJEl4FiSS8CyReSAMl5CZCYQskl5YGwJYiXUWWIhKyiIkCyxEJYO3/YnaOLuSbVFAueXVJpPJ1YibZ9Yye64zc/T6zbMRK1fFIEsSjoom4sRArcJzsJy8oiTFa+h91v9wwf/AG1H/wBBO0iJly813ngiIkJIliBJIiAiIgSaTEQhJDESRpMRED//2Q==",
    description: "UI/UX Designer",
  },
  {
    id: 3,
    name: "Ruth Bishwakarma",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhITEhMVFhUVFRYSFxYVFhUXGBkVFxUYFhUVFxUYHSggGRslGxgVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGzIfHR8vLS0rLS0vLSstKy0tLS4tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLi0tLSstMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABDEAABAwIDBQUEBggEBwAAAAABAAIDBBESITEFBkFRYQcTcYGRIjKCoSNCscHR8AgUUmJykqLhMzRDUxUkY3Ozw/H/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAICAgIDAQAAAAAAAAAAAQIRAyESMUFRBBMiMv/aAAwDAQACEQMRAD8AnFERAREQEREBERAREQEREBarbO8NLTWEsgDjowZuI524DqbLit+98pmQEwvEfePdHHhzeWsye8uOmosBnnqoaqK95cXPe5xOZJJJJ6niq3L6aTD5r6Mn342ay2OpY0nhm4i/7WC4Hqt3Q10UzBJE9r2HRzSCF8sGsa4XvY6D8VnbL2pU07j3M0jMVicLiL20uOKndPGPqFFEu6Ham4FsNdY3NhM3K19A9oHzy681LEbw4AtIIIuCMwRzBUqWaVIiIgREQEREBERAREQEREBERAREQEREBERAREQFHW/PaJHTnBTSgvbYmzMTSb+7jOVrcRfVSIV86dpFG6OrkLssROBoubMa4xtyPPATlzVcqvhN1zW1NsyT2ucg95DR7rcZL3Bo4C91rXyXNvO677d7czE0OmGbs8PLx5ldI3c2mtbuwsf2yOr9GV99IejAab8eZ+4BbKGrB6/ID8TqpFqNw4ne7ktbV9mkpIMcjWeN7fJWnLKreGxxrTZ3Ppp4qaeyTeKecSQSuDhG0OjJADsAOEi41AuMznnxUO7Y2NPTyYJQOjmnI+q6nsimc3aMNzYPZLGOowlwbbqWg/Cr7+Yys6sqf0RFdiIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICh/tY2af12lcBk8s9cZFvWx+IKYFynaNswS07JB71PPDMD+62VmMeFs/hVc5uL8d1k0tLHaw5ZLYBq5jeTaNbFK9zGU7WYjYPe4OIF87Bp5cFRuzvbJUYg6Ngw8Y34gbZHIgFcnhZNvQ893TrmNXsxNlwW8299TG8RQNaHG2cgJ1NhYDqtRDt/aAkeyWaXEw4XiOJuFpPC4JBVpjuK5Zay0v9p0DiwSDRpF/M2Ws7KqeSavpbaxv7xx/ca15tf1HxLqNuxPl2fUY/aPdOINrXtmDbyWP2PU80Bp5mtYW1LjFJfN7WYbxkAe7dwuedwrceWp39qcmFyy6+k4IiLpcIiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLA2/EXU07QLkxvsOZDSQPVZ68c24I55IRwe0qFj5HOc0EjEA7iA7IgEcCFrNn7GigP0bQAeAFhrewXSV8GBxbe9rC/PLVaOvrCCzBbJ13AtxXbbQcjpmuPLrp6fHqzZtrY8UpD3Cz2tADhkbBXNmbOAILnOdbS5NvTRa/Z0dSXl8k14nfVLdBwwnVbiSVjWHAdE2m/TG2+A6KVotnG/L4SqdyNiRxSQiMZsZGJP4o2EYj1N2+nVYNNM50lnZh2Xldd9uxscU0EbC5z3hjQ57jck6+Qz0V8MfLtlycn65Z9zTboiLpcAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIOf3ihIOLg4W8x/b7Fxs1O/XvXAa2aG39bKR9q4e6kxWth48+Hzso5rawRm7sm8+Hqubmx/rcd342fXfw1jcDiQBUuOmIyOYB/JZeSvbE3C3FnmcTi438SqKrehjNLLQVe2Jql2GJtr5YrLK42ui8kdBsqpLpQBrp4A5En7ApnCiPdrYpbhY25cSHSPPAA5kn7Au82RvIySrno3WEkbWSNsfeY4Zi37TTr0c3qujhnVri/J9yfLoERFs5hERAREQEREBERAREQEREBERAREQEREBFS94AJJAAzJOQHiVy+2O0LZtO7A6YPdxEQx28XD2fmg6peEqLNv8AbVSxttSwvlkP+5ZjG+Nrl3gPVRjtrfPaFaSaidwj4Qx+xGPFozd8RKCbdvbyQz1UezonhwkjmdM5hvhDWYWtDv2sTgctMAXN01S4ufDJYTRZPbpiH1ZG82uGfTMcFxXZZITtNp/6ErR09232KQt/NnwHupe/ZDUj2YiT74vmxwGZb14aqvJxeU69teLl8L36aPaGzmuOTAPILcbvbt3zADW8XW+Q5qrdoRyvbHUTwCW2LuWStc51tbW4eF12z7AANFgMgAs+Pgt/025fyZJrBptqVcNFTvkIs1gvb6z3aNbfmTYeagj/AI7U/rRq2vwzd53txwP7NuLbezbkut7U9vCaZtPG67Ic3EHIy6EdcIy8SeS4NwsuvU1px927r6P3R34pK1kYEjGTlvtwk2cHDXDf3hxFuBXUL5Cgfd5IOnHqpL3J7S6iBzYqtxmh0xnORg5g/XHQ59eCpYlOSLSbP3u2fM4NjqYi52jScLieQa6xut2qgiIgIiICIiAiIgIiICIiAiIgIUXMdom3zRUT5W2xuc2Jt+BdqfJocfGyCFd/97Zqyrks8iCMuZGwE4bA2xkaFxte/guVF7Er1zcz4BUl3tAdFZLHDdTxVxoVWDVVhqaNu17LIXNlnqAL4BHEL6XlcQfQNv5qxv1RTR1d5ZXSmVuMOdlb2iMAAyAAtl1XWdjtMHUk54/rI9GxMI+ZK1PapO11QwAj6JpBy52/D5LXBnl7cJWMlc+JkAcZcQczB7wff2SCND1Ux11dWxUTnVhY0xxjGWHOSQ5NZoMNyRe3yWk7GdnxvdNO4XkaQByDSMreJB9AqO1/bWKSOkYco/pZLcZHD2G+TST8Q5JfZEduJJudTn5nVWpg0jMXB4K4SsSVxc4MGpzPRv4nT1VVldHFkSOJv5LLwLxrgMgvJpQASdB8zyCAVvNn757QpgBHUyWGjXnG3ws+9h4WWjhDrXdkToOQ/FYdU4A5uA8SFAnzst37kr+9ina0SxgPDmAgPZexu2+RBLfG/RSCoJ7DHN/XHZi/cvGXEYmH7lOypUiIigEREBERAREQEREBERAUL9uO1C6eKm+qxmM/xPOXoAPVTQvmffzaJnrql+IPb3jmtcBb2GnC0W6AWvxtdTBz7eF1jVDrPHirpksQCsTaRtn1VhnWzReROuGnmF6pEudkz+7oqh/N2LzF2j7Ao62zUuke9xNy9xN/ErtN0qzu9kVDuIy8zI632rgnBa4TpnfaROzGsZS0VfVP91jmtA5lrLho6kvaFHVZVPlkfK83c9xe49SbnyW2qtpYdnwUzT/iSyVMnk7u4m/0E+i0Bz8B+bKlWiiaWwv6DmVbhGBpcfecrjQHZkeGvqqKyYAfiqpGSAEA6u/NlZnqxj0vh91o4u5+S18Upu554DLxOiz6KIhuWROZccz5ck3tK7hec5n4QdGNNj5nX0XjgwD2WW62t9qvRgNzy6ucbn1WPNUtOjgfAEoJR7BqQuqZ5RfCyLDp9Z7hYX8GlTeon/R/gHc1clzd0kbCOFmtcQbc/aPoFLCpQREUAiIgIiICIiAiIgIiIOZ7RtqvpqCd7Gkkjurg2w957OPyuPVfN5eSSTnfMqWO3TajrwU7XnCQZHsFrXvZhJ1/ay8FEwyVoMasFxcLH2gbsv0usyYA6rXSu9kt5Xt4KaMyideNvgr7josHZb/Yt1KzCUg6zY1ZbZtYy/8AqQ2835/etFI7JYbK5zGPZwkLL+LXXHyJVyWQYc1rjl0pZ2oLjkL5/YOKPF7NGnHw/v8AiseKTLEfradBw/PVXGy2F+f5Cz2suzzBoWkqqguXtXOXFWMN7DmbKtqWVTRXwNtr7bvDhdbjCbZfPRbTdHdWWqOM/Rwk5yEXJAysxvHx0z46LYb87pClLZI5CYnkMDXOBkDrE3Nha2XDRRM8d6X/AF5ePk5SWkBzc+56fde/yWNLDyv5uKyXQ20Lj+eqtwAue1tgMRDfU2VqomT9H2KQMrSfcJhDbG4xDvcXnYt+Sl1azd3YsFJAyGBuFgzJ4ucRm9x4krZqgIiICIiAiIgIiICIiAiKl7rAk8Bf0QfPHanVd5tKoz9wtYPhaAuRCzNv13eVE8jvryvcL65uJAstaS46Nt4nP0CuKKlytbI2TNVShkYsLnE8g4WjrzPRUVwcBmVLO4kGGjhBw+7f2eZNyT1WPNyXGdN+DjmeXbiZdwaqP/DkY8a53afvWuqtl1cYJkgeAOIFx45XyU3wwXXOb+17oIWtj1kcWF3IAXIB55jwusePl5Mrpvy8PFjN+kPSyX6clVNUY8LeYxO8OS2hYFYlpm3uGjquzThYz5Fj1U18hoMlnSUTTpl1/ssR2zObj5BLKMEvAXVdnm7oq58cg+hizdwDnHRl+Vsz5c1z8Gyi4tJNmGxOd3W6ZWupA2ZvQymibFBTDC25s6T3nc3HCs85lr+WnH473kkma2ECIBoAsHWs0AcGj8hRnv8AVVO6dohkfI5jSH4nXGLK2EDIHXTosvbO+8dRSuZhkbM44bNJDWW1zGv91xMrGkWHDQjgVnxcd3ut+blnj4z5eST3y0Ko2TRvmniiYSHySNjaToHONgT0F7q0+/HVd72P7FM20I5LezEO+J5EDL+ohdFcj6DpYy1jGk3LWhpPMgWurqIqAiIgIiICIiAiIgIiIC1m8u0f1ekqJ7X7uJ7wOZDfZHrZbNaje6gdPRVULfefC8N/itdo9QEHy6Bnidm48fwVatkEEg6g2XtytBROG2zXTbpb3NgwxTZRaB9jdviOI6rmw0DxVEouq54TKdrYZ3G7ic27UgDA9sjXAi9w4EW55KO9/dtMqJIGxm7Yo3Xt/uvkLpPsYuDkjI0y8MlmRSgNHgFTj4/Gr8nJ5xkgoSrTZQvS5bMV0qkuVnEqXOUD2ifYFvFpLfLh8lde9YMzsLsY8HeHAq9jugomkDXX52B+4q2+e2Sprs/RYznEgHjofFRaldJJItxX0x2TbCbT0Mb7e3MBI48cP1B6Z/EVAW4+wn1tVDA0Gxdief2Yx77vT5kDivq+GJrGta0Wa0BoA4ACwHoq0VoiKAREQEREBERAREQEREBERB8wb+UPcbQqmWsO9c4D91/tt+TgtHiX0fvnuFS7QIe8ujmaMIkZxbwD2n3gM+R6qLtt9kW0IrmDBO391wY/+R9h/UVaUcBjXhcVf2psyqpzhnhkiOn0jC0HwJyPktc7PUk9FbYre4XsMz0/OStOVQZ5DkFUW8Ao0MYYgfz6K42od+f7q9gACuRNYGl7mkgOa2wy1Djc/wAqi9Em1DZrhC5YtTtGL/Sic3+J9/lb71RHWg6iyTIs0yyVQ32dNPs/svBLfl6r0OU7HkxyWOxpcS3nZX3hdn2RbosravE9zDFT4ZJG3uXXJwstyJGfTxUUSx2NbuNpqFsro8M093ku97uwT3Q6Aj2rfvenfrwBeqoIiICIiAiIgIiICIiAiIgIiICIiDW7xyxsppnSAOaGHJwBBJFmixy1IXy5tGNoJsB5ZKeO1jauCKGAayOc8/wRt0/mc30UDbUdqVeehrXyI4uHDTO/TmvCzIJLcWIJGVslA9aL6lYtdWPGKMOIYbEjmR/9Ww2bRTzd53cb5O7bjcWi5Db2uQNdeC1NRTvxuDmuab6OBBtwyPRKLEbbrI7tXGR2XrlAsltlaub6q7KeCtWQeOJJuc11/ZXvE6h2hC+/0chEEo5seQAfhdhPkea5GyrYg+2kXJ9l+8JrtnQSvN5GXhl595HYXPVzS13xLrFAIiICIiAiIgIiICIiAiIgIiICIiCNe2yqjbTwiw7wucWu4tbYNcPAkt/lUG1gc9twMgQD6qRO2naGOsey+UTI4/NwMh+0LgCf+Xd1ePvV4MIK1OLWJOVr+g/FVNcrG032bbnl6Zn5pR2W6m/MdHCYqenxyOcHPkkdhDrHIAAE2Wo3x206rn798bY3FjWkNcXA4bjFcgZ2sPJaKgFhdXqibFw0TZpadlkcjyOqtlUY7uVUhUCw85oOKPVChKpegqkBVBEPpLsH2OYdn993oeKl/ehoFgwt+jc0nibtz8FJKi39HraOPZ8sJOcE7rfwSNDx/V3ilJQCIiAiIgIiICIiAiIgIiICIiAiIg+cO1T/AD9X/wB1v/iauUf/AJf4/uXiLQYDVi7V1HxfaiKL6FdF7q9fxRFUYrNVcfqiKRakVCIoHoXqIgm/9GvTaHjT/wDtU2oigEREBERAREQEREH/2Q==",
    description: "Backend Developer",
  },
];

const AboutUs = () => {
 
  return (
    <div className="root about">
      <div className="container">
        <div id="team-section">
        <h1 className="section-title">Meet Our Team</h1>
        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
              />
              <h2 className="member-name">{member.name}</h2>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;