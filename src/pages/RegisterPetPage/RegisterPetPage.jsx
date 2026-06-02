import Header from "../../components/pet-header/Header.jsx";
import * as S from "./style.js";
import CheckIcon from "../../assets/icons/CheckIcon.jsx";
import SpecieTag from "../../components/tags-components/SpecieTag.jsx";
import {useState} from "react";
import axios from 'axios';
import DefaultTag from "../../components/tags-components/DefaultTag.jsx";

function RegisterPetPage() {
    const [formData, setFormData] = useState({
        name: '',
        specie: '',
        breed: '',
        ageMonths: 0,
        size: '',
        weight: 0,
        gender: '',
        description: '',
        cep: '',
    });

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleAgeChange = (field, value) => {
        const years = field === 'years' ? parseInt(value) || 0 : Math.floor(formData.ageMonths / 12);
        const months = field === 'months' ? parseInt(value) || 0 : formData.ageMonths % 12;

        setFormData(prev => ({
            ...prev,
            ageMonths: (years * 12) + months
        }));
    };

    const handlePhotoUpload = (event) => {
        const files = Array.from(event.target.files);
        setPhotos(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbm5AZ21haWwuY29tIiwidXNlcklkIjozLCJpYXQiOjE3NzkxMDQzMTV9.SuusoaQ2crfm5FTC5k4xHMXAvBU98h0W7SqBIADwfVI7alfIsuGxQX5yvzpntRPq";

        try {
            const donationData = {
                name: formData.name,
                specie: formData.specie,
                breed: formData.breed || null,
                ageMonths: formData.ageMonths,
                size: formData.size,
                weight: parseFloat(formData.weight) || 0,
                gender: formData.gender,
                description: formData.description || null,
                cep: formData.cep
            };

            console.log('Enviando doação:', donationData);

            const donationResponse = await axios.post(
                'https://help-pet-back-g2.azurewebsites.net/donations/create',
                donationData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            console.log('Doação criada:', donationResponse.data);
            const donationId = donationResponse.data.id;

            // Fotos
            if (photos.length > 0) {
                for (const photo of photos) {
                    const photoFormData = new FormData();
                    photoFormData.append('file', photo);

                    await axios.post(
                        `https://help-pet-back-g2.azurewebsites.net/photos/upload?donationId=${donationId}`,
                        photoFormData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                'Authorization': `Bearer ${token}`
                            }
                        }
                    );
                }
                console.log('Fotos enviadas');
            }

            alert('Doação cadastrada com sucesso!');

            setFormData({
                name: '',
                specie: '',
                breed: '',
                ageMonths: 0,
                size: '',
                weight: 0,
                gender: '',
                description: '',
                cep: '',
            });
            setPhotos([]);

        } catch (error) {
            console.error('Erro ao cadastrar a doação:', error);
            if (error.response) {
                console.error('Erro:', error.response.data);
                alert(`Erro ao cadastrar a doação: ${JSON.stringify(error.response.data)}`);
            } else {
                alert('Erro ao cadastrar a doação. Tente novamente.');
            }
        } finally {
            setLoading(false);
        }
    };

    const displayYears = Math.floor(formData.ageMonths / 12);
    const displayMonths = formData.ageMonths % 12;

    return (
        <S.Container>
            <Header />
            <S.MainContentRegister>
                <S.TitleH1>Cadastrar uma nova doação</S.TitleH1>
                <S.Form onSubmit={handleSubmit}>
                    <div>
                        <S.TitleH2>Como o bicho se chama</S.TitleH2>
                        <S.TextInput
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <S.TitleH2>O que ele é</S.TitleH2>
                        <S.ButtonWrapper>
                            <S.PetCheckInput
                                id="dog"
                                type="radio"
                                name="specie"
                                value="DOG"
                                checked={formData.specie === 'DOG'}
                                onChange={(e) => handleInputChange('specie', e.target.value)}
                            />
                            <S.PetLabel htmlFor="dog"><SpecieTag specie="DOG"/></S.PetLabel>

                            <S.PetCheckInput
                                id="cat"
                                type="radio"
                                name="specie"
                                value="CAT"
                                checked={formData.specie === 'CAT'}
                                onChange={(e) => handleInputChange('specie', e.target.value)}
                            />
                            <S.PetLabel htmlFor="cat"><SpecieTag specie="CAT"/></S.PetLabel>

                            <S.PetCheckInput
                                id="bird"
                                type="radio"
                                name="specie"
                                value="BIRD"
                                checked={formData.specie === 'BIRD'}
                                onChange={(e) => handleInputChange('specie', e.target.value)}
                            />
                            <S.PetLabel htmlFor="bird"><SpecieTag specie="BIRD"/></S.PetLabel>

                            <S.PetCheckInput
                                id="fish"
                                type="radio"
                                name="specie"
                                value="FISH"
                                checked={formData.specie === 'FISH'}
                                onChange={(e) => handleInputChange('specie', e.target.value)}
                            />
                            <S.PetLabel htmlFor="fish"><SpecieTag specie="FISH"/></S.PetLabel>

                            <S.PetCheckInput
                                id="rodent"
                                type="radio"
                                name="specie"
                                value="RODENT"
                                checked={formData.specie === 'RODENT'}
                                onChange={(e) => handleInputChange('specie', e.target.value)}
                            />
                            <S.PetLabel htmlFor="rodent"><SpecieTag specie="RODENT"/></S.PetLabel>

                            <S.PetCheckInput
                                id="reptile"
                                type="radio"
                                name="specie"
                                value="REPTILE"
                                checked={formData.specie === 'REPTILE'}
                                onChange={(e) => handleInputChange('specie', e.target.value)}
                            />
                            <S.PetLabel htmlFor="reptile"><SpecieTag specie="REPTILE"/></S.PetLabel>

                            <S.PetCheckInput
                                id="amphibian"
                                type="radio"
                                name="specie"
                                value="AMPHIBIAN"
                                checked={formData.specie === 'AMPHIBIAN'}
                                onChange={(e) => handleInputChange('specie', e.target.value)}
                            />
                            <S.PetLabel htmlFor="amphibian"><SpecieTag specie="AMPHIBIAN"/></S.PetLabel>

                            <S.PetCheckInput
                                id="arachnid"
                                type="radio"
                                name="specie"
                                value="ARACHNID"
                                checked={formData.specie === 'ARACHNID'}
                                onChange={(e) => handleInputChange('specie', e.target.value)}
                            />
                            <S.PetLabel htmlFor="arachnid"><SpecieTag specie="ARACHNID"/></S.PetLabel>

                            <S.PetCheckInput
                                id="cnidarians"
                                type="radio"
                                name="specie"
                                value="CNIDARIANS"
                                checked={formData.specie === 'CNIDARIANS'}
                                onChange={(e) => handleInputChange('specie', e.target.value)}
                            />
                            <S.PetLabel htmlFor="cnidarians"><SpecieTag specie="CNIDARIANS"/></S.PetLabel>
                        </S.ButtonWrapper>
                    </div>

                    <div>
                        <S.TitleH2>Qual a raça? (se souber)</S.TitleH2>
                        <S.TextInput
                            value={formData.breed}
                            onChange={(e) => handleInputChange('breed', e.target.value)}
                        />
                    </div>

                    <div>
                        <S.TitleH2>Qual a idade?</S.TitleH2>
                        <S.AgeWrapper>
                            <p>Anos:</p>
                            <S.NumberInput
                                type="number"
                                min="0"
                                value={displayYears}
                                onChange={(e) => handleAgeChange('years', e.target.value)}
                            />
                            <p>Meses:</p>
                            <S.NumberInput
                                type="number"
                                min="0"
                                max="11"
                                value={displayMonths}
                                onChange={(e) => handleAgeChange('months', e.target.value)}
                            />
                        </S.AgeWrapper>
                    </div>

                    <div>
                        <S.TitleH2>Adicione fotos do pet (opcional)</S.TitleH2>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handlePhotoUpload}
                        />
                        {photos.length > 0 && <p>{photos.length} foto(s) selecionada(s)</p>}
                    </div>

                    <div>
                        <S.TitleH2>Tamanho:</S.TitleH2>
                        <S.ButtonWrapper>
                            <S.PetCheckInput
                                id="small"
                                type="radio"
                                name="size"
                                value="SMALL"
                                checked={formData.size === 'SMALL'}
                                onChange={(e) => handleInputChange('size', e.target.value)}
                            />
                            <S.PetLabel htmlFor="small"><DefaultTag name={"Pequeno"}/></S.PetLabel>

                            <S.PetCheckInput
                                id="medium"
                                type="radio"
                                name="size"
                                value="MEDIUM"
                                checked={formData.size === 'MEDIUM'}
                                onChange={(e) => handleInputChange('size', e.target.value)}
                            />
                            <S.PetLabel htmlFor="medium"><DefaultTag name={"Médio"}/></S.PetLabel>

                            <S.PetCheckInput
                                id="large"
                                type="radio"
                                name="size"
                                value="LARGE"
                                checked={formData.size === 'LARGE'}
                                onChange={(e) => handleInputChange('size', e.target.value)}
                            />
                            <S.PetLabel htmlFor="large"><DefaultTag name={"Grande"}/></S.PetLabel>
                        </S.ButtonWrapper>
                    </div>

                    <S.WeightContent>
                        <S.TitleH2>Qual o peso?</S.TitleH2>
                        <S.NumberInput
                            type="number"
                            step="0.1"
                            min="0"
                            value={formData.weight}
                            onChange={(e) => handleInputChange('weight', e.target.value)}
                        />
                        <p>(em kg)</p>
                    </S.WeightContent>

                    <div>
                        <S.TitleH2>Qual o sexo?</S.TitleH2>
                        <S.ButtonWrapper>
                            <S.PetCheckInput
                                id="male"
                                type="radio"
                                name="gender"
                                value="MALE"
                                checked={formData.gender === 'MALE'}
                                onChange={(e) => handleInputChange('gender', e.target.value)}
                            />
                            <S.PetLabel htmlFor="male"><DefaultTag name={"Macho"}/></S.PetLabel>

                            <S.PetCheckInput
                                id="female"
                                type="radio"
                                name="gender"
                                value="FEMALE"
                                checked={formData.gender === 'FEMALE'}
                                onChange={(e) => handleInputChange('gender', e.target.value)}
                            />
                            <S.PetLabel htmlFor="female"><DefaultTag name={"Fêmea"}/></S.PetLabel>
                        </S.ButtonWrapper>
                    </div>

                    <div>
                        <S.TitleH2>Descrição do Pet:</S.TitleH2>
                        <S.TextAreaInput
                            value={formData.description}
                            maxLength="230"
                            placeholder="Digite Aqui"
                            onChange={(e) => handleInputChange('description', e.target.value)}
                        />
                    </div>

                    <div>
                        <S.TitleH2>Digite o CEP:</S.TitleH2>
                        <S.AddressWrapper>
                            <S.TextInput
                                value={formData.cep}
                                onChange={(e) => handleInputChange('cep', e.target.value)}
                                maxLength="8"
                                placeholder="00000-000"
                                required
                            />
                        </S.AddressWrapper>
                    </div>

                    <S.DonationButton type="submit" disabled={loading}>
                        {loading ? 'Cadastrando...' : 'Doar Bichinho'}
                        <CheckIcon />
                    </S.DonationButton>
                </S.Form>
            </S.MainContentRegister>
        </S.Container>
    );
}

export default RegisterPetPage;